import { useRef } from "react";

type Props = {
  onCapture: (file: File) => void;
};

export default function CameraComponent({ onCapture }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function abrirCamera() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onCapture(file);
  }

  return (
    <div className="text-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleChange}
      />

      <button
        onClick={abrirCamera}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:px-5 hover:py-3 cursor-pointer hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]  "
      >
        📸 Abrir Câmera
      </button>
    </div>
  );
}