
import { useVistoria } from "../../hooks/useVistoria";
import {IntroModal} from "../../components/Modals/introModal";
import {TipoModal} from "../../components/Modals/tipoModal";
import GuiaFotoModal from "../../components/Modals/GuiaFotoModal";
import FinalModal from "../../components/Modals/FinalModal";

export function VistoriaPage() {
  const vistoria = useVistoria();

  return (
    <>
      {vistoria.etapa === "intro" && <IntroModal {...vistoria} />}
      {vistoria.etapa === "tipo" && <TipoModal {...vistoria} />}
      {vistoria.etapa === "guia" && <GuiaFotoModal {...vistoria} />}
      {vistoria.etapa === "final" && <FinalModal {...vistoria} />}
    </>
  );
}