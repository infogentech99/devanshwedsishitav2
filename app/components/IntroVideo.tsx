"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    };
  }, [show]);

  useEffect(() => {
    // silently preload video in background so click-to-play feels instant
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleCanPlay = () => {
    setReady(true);
  };

  const playVideo = async () => {
    if (!videoRef.current || started) return;
    try {
      setStarted(true);
      await videoRef.current.play();
    } catch (e) {
      setStarted(false);
      console.log(e);
    }
  };

  const handleEnd = () => {
    setHide(true);
    setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      onClick={playVideo}
      className={`fixed inset-0 z-[999999] cursor-pointer transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ width: "100vw", height: "100%" }}
    >
      <video
        ref={videoRef}
        poster="/assets/hero_video.png"
        playsInline
        webkit-playsinline="true"
        muted
        preload="auto"
        onCanPlay={handleCanPlay}
        onEnded={handleEnd}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
        }}
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>

      {/* optional: subtle play indicator once buffered */}
      {ready && !started && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center animate-pulse">
            <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}