import { useState } from "react";
import { Camera } from "../../components/Camera";
import { ModalGuia } from "../../components/ola";
import { ModalFinal } from "../../components/ModalFinal";
import { useVistoria } from "../../hooks/useVistoria";

export function VistoriaPage() {
  const {
    etapaAtual,
    fotos,
    salvarFoto,
    proximo,
    finalizado
  } = useVistoria();

  const [abrirCamera, setAbrirCamera] = useState(false);

  if (finalizado()) {
    return <ModalFinal fotos={fotos} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold text-white">OLA</h1>
      {!abrirCamera ? (
        <ModalGuia
          etapa={etapaAtual}
          onNext={() => setAbrirCamera(true)}
        />
      ) : (
        <Camera
          onCapture={(img) => {
            salvarFoto(img);
            setAbrirCamera(false);
            proximo();
          }}
        />
      )}

    </div>
  );
}