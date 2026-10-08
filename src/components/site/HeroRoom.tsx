import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Decorative room; hero text stays accessible HTML above the scene. */
export function HeroRoom() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    const tokens = getComputedStyle(container);
    const color = (name: string) => new THREE.Color(tokens.getPropertyValue(name).trim());
    const scene = new THREE.Scene();
    scene.background = color("--room-background");
    scene.fog = new THREE.Fog(color("--room-background"), 16, 40);
    const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 70);
    camera.position.set(0, 0.4, 10);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const materials: THREE.Material[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const wall = new THREE.MeshStandardMaterial({
      color: color("--room-wall"), roughness: 0.87, metalness: 0.18, side: THREE.BackSide,
    });
    materials.push(wall);
    const roomGeometry = new THREE.BoxGeometry(24, 13, 30);
    geometries.push(roomGeometry);
    const room = new THREE.Mesh(roomGeometry, wall);
    room.position.z = -8;
    scene.add(room);

    // Recessed architectural frames establish depth around the floating headline.
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: color("--room-frame"), roughness: 0.5, metalness: 0.45,
    });
    materials.push(frameMaterial);
    const beam = (width: number, height: number, depth: number, x: number, y: number, z: number) => {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      geometries.push(geometry);
      const mesh = new THREE.Mesh(geometry, frameMaterial);
      mesh.position.set(x, y, z);
      scene.add(mesh);
    };
    [-4, -12, -20].forEach((z) => {
      beam(0.16, 13, 0.3, -11.8, 0, z);
      beam(0.16, 13, 0.3, 11.8, 0, z);
      beam(24, 0.16, 0.3, 0, 6.3, z);
      beam(24, 0.1, 0.3, 0, -6.3, z);
    });

    const lightMaterial = new THREE.MeshBasicMaterial({ color: color("--room-light") });
    materials.push(lightMaterial);
    const strip = (x: number, z: number) => {
      const geometry = new THREE.BoxGeometry(0.045, 9.5, 0.06);
      geometries.push(geometry);
      const mesh = new THREE.Mesh(geometry, lightMaterial);
      mesh.position.set(x, 0.2, z);
      scene.add(mesh);
      const light = new THREE.PointLight(color("--room-light"), 38, 20, 2);
      light.position.set(x * 0.88, 1, z + 1);
      scene.add(light);
    };
    strip(-11.65, -4);
    strip(11.65, -12);
    scene.add(new THREE.AmbientLight(color("--room-light"), 0.3));
    const ceiling = new THREE.PointLight(color("--room-light"), 75, 28, 2);
    ceiling.position.set(-4, 5.5, -7);
    scene.add(ceiling);
    const floorLight = new THREE.PointLight(color("--room-light"), 25, 22, 2);
    floorLight.position.set(5, -5, -13);
    scene.add(floorLight);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.fov = width < 640 ? 70 : 54;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = new THREE.Vector2();
    const onPointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.set((event.clientX - bounds.left) / bounds.width - 0.5, (event.clientY - bounds.top) / bounds.height - 0.5);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    let frame = 0;
    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibility.observe(container);
    const start = performance.now();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (!visible || document.hidden) return;
      const time = (performance.now() - start) / 1000;
      if (!preference.matches) {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.65 + Math.sin(time * 0.3) * 0.25, 0.035);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.4 - pointer.y * 0.4 + Math.cos(time * 0.24) * 0.12, 0.035);
      } else {
        camera.position.set(0, 0.4, 10);
      }
      camera.lookAt(0, 0, -14);
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onPointer);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} className="hero-room" aria-hidden="true" />;
}