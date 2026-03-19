
import { useVistoria } from "../../hooks/useVistoria";
import {IntroModal} from "../../components/Modals/introModalsExe";
import {TypeModals} from "../../components/Modals/typesModalsExes";
import GuiaFotoModal from "../../components/Modals/GuiaFotoModal";
import FinalModal from "../../components/Modals/FinalModal";

export function VistoriaPage() {
  const vistoria = useVistoria();

  return (
    <>
      {vistoria.etapa === "intro" && <IntroModal {...vistoria} />}
      {vistoria.etapa === "tipo" && <TypeModals {...vistoria} />}
      {vistoria.etapa === "guia" && <GuiaFotoModal {...vistoria} />}
      {vistoria.etapa === "final" && <FinalModal {...vistoria} />}
    </>
  );
}