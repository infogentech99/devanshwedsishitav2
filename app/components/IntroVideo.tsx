"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);
  const startedRef = useRef(false);

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

  const tryPlay = async () => {
    if (!videoRef.current || startedRef.current) return;
    startedRef.current = true;
    try {
      await videoRef.current.play();
    } catch (e) {
      // autoplay blocked, wait for tap
      startedRef.current = false;
      console.log(e);
    }
  };

  useEffect(() => {
    // start loading + attempt autoplay as soon as component mounts
    // instead of waiting for user tap -> removes the visible "lag"
    tryPlay();
  }, []);

  const handleCanPlay = () => {
    setReady(true);
    tryPlay();
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
      onClick={tryPlay}
      className={`fixed inset-0 z-[999999] cursor-pointer transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ width: "100vw", height: "100%" }}
    >
      {/* poster stays visible until video is actually ready to play */}
      <img
        src="/assets/hero_video.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: ready ? 0 : 1,
          transition: "opacity 400ms ease",
          pointerEvents: "none",
        }}
      />
      <video
        ref={videoRef}
        muted
        playsInline
        webkit-playsinline="true"
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
          opacity: ready ? 1 : 0,
          transition: "opacity 400ms ease",
          pointerEvents: "none",
        }}
      >
        <source src="/assets/hero_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}