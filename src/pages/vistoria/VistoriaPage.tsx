import { useVistoria } from "../../hooks/useVistoria";

import { IntroModal } from "../../components/Modals/introModalsExe";
import { TypeModals } from "../../components/Modals/typesModalsExes";
import { TypoVist } from "../../components/Modals/tipoVist";
import { SelecionarFotosModal } from "../../components/Modals/SelecionarFotosModal";
import { GuiaFotoModals } from "../../components/Modals/GuiaFotoModal";
import FinalModal from "../../components/Modals/FinalModal";

export function VistoriaPage() {
  const vistoria = useVistoria();
  console.log("TIPO NA PAGE:", vistoria.tipoVeiculo);
  return (
    <>
      {vistoria.etapa === "intro" && <IntroModal {...vistoria} />}

      {vistoria.etapa === "tipo" && <TypeModals {...vistoria} />}

      {vistoria.etapa === "tipoVist" && <TypoVist {...vistoria} />}

      {vistoria.etapa === "selecionarFotos" && (
        <SelecionarFotosModal {...vistoria} />
      )}

      {vistoria.etapa === "guia" && vistoria.tipoVeiculo && (
        <GuiaFotoModals
          adicionarFoto={vistoria.adicionarFoto}
          proximaFoto={vistoria.proximaFoto}
          fotoAtual={vistoria.fotoAtual}
          setEtapa={vistoria.setEtapa}
          fotosSelecionadas={vistoria.fotosSelecionadas}
          tipo={vistoria.tipoVeiculo}
        />)}
      {vistoria.etapa === "final" && <FinalModal {...vistoria} />}
    </>
  );
}