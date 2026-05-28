import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (on) {
      a.pause();
    } else {
      a.volume = 0.25;
      a.play().catch(() => {});
    }
    setOn(!on);
  };

  return (
    <>
      <audio
        ref={ref}
        loop
        src="https://cdn.pixabay.com/audio/2022/10/30/audio_347b80e2a4.mp3"
      />
      <button
        onClick={toggle}
        aria-label={on ? "Mute ambient music" : "Play ambient music"}
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass text-foreground transition-all hover:text-primary hover:shadow-[var(--shadow-glow)]"
      >
        {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}