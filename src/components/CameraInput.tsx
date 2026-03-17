import React from "react";

type Props = {
  onCapture: (base64: string) => void;
};

export default function CameraInput({ onCapture }: Props) {
  function handleFoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        onCapture(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <input
      type="file"
      accept="image/*"
      // Aqui garantimos que a câmera será aberta
      onChange={handleFoto}
      className="border p-2 rounded"
    />
  );
}