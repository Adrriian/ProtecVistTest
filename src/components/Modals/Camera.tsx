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
        className="px-6 py-4 bg-green-500 text-white rounded-xl"
      >
        📸 Abrir Câmera
      </button>
    </div>
  );
}