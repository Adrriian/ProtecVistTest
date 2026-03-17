// Camera.tsx
import { useRef, useState } from "react";
import { atulizarTheme } from "../../util/themeLocalStorage";

export function Vistoria() {
  atulizarTheme()
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [foto, setFoto] = useState<string | null>(null);

  const abrirCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Erro ao acessar câmera:", err);
    }
  };

  const tirarFoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/png");
    setFoto(dataURL);
  };

  return (
    <div>
      <button className="bg-white text-black" onClick={abrirCamera}>Abrir Câmera</button>
      <video ref={videoRef} style={{ width: "100%", maxWidth: 400 }} />
      <button onClick={tirarFoto}>Tirar Foto</button>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {foto && <img src={foto} alt="Foto tirada" style={{ width: 200, marginTop: 10 }} />}
    </div>
  );
}