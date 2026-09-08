"use client";
import { useEffect, useState, useRef } from "react";
import CoupleIntro from "@/app/components/CoupleIntro";
import CoupleUs from "@/app/components/CoupleUs";
import CoupleMessage from "@/app/components/CoupleMessage";
import CoupleLogo from "@/app/components/CoupleLogo";
import IntroVideo from "@/app/components/IntroVideo";
import RoseHeroTemp from "@/app/components/RoseHeroTemp";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;
    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  useEffect(() => {
    const handler = () => startMusic();
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  return (
    <>
      <button
        onClick={() => (started ? toggleMusic() : startMusic())}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/back_song.mp3" loop preload="auto" playsInline />

      <IntroVideo onFinish={() => setIntroDone(true)} />

      {/* Baaki saara content sirf intro khatam hone ke baad mount hoga */}
      {introDone && (
        <>
          <RoseHeroTemp />
          <CoupleIntro />
          <CoupleUs />
          <CoupleMessage />
          <CoupleLogo />
        </>
      )}
    </>
  );
}