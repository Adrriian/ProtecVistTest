import { useEffect, useRef } from "react";

type Props = {
  onCapture: (img: string) => void;
};

export function Camera({ onCapture }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function start() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    start();
  }, []);

  function tirarFoto() {
    const video = videoRef.current!;
    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0);

    const img = canvas.toDataURL("image/jpeg");

    onCapture(img);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} autoPlay playsInline className="w-full rounded-xl" />

      <button
        onClick={tirarFoto}
        className="bg-blue-500 text-white px-6 py-3 rounded-full"
      >
        Tirar foto
      </button>
    </div>
  );
}