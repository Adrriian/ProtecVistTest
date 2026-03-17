import { useState } from "react"
import CameraInput from "../../components/CameraInput"
import { fotosCarro, fotosMoto } from "../../util/fotos"

export default function Vistoria(){

 const [step, setStep] = useState<
    "instrucoes" | "veiculo" | "modo" | "especifica" | "foto" | "preview" | "final"
  >("instrucoes")

  const [veiculo, setVeiculo] = useState<"carro" | "moto" | null>(null)
  const [selecionadas, setSelecionadas] = useState<string[]>([])
  const [filaFotos, setFilaFotos] = useState<string[]>([])
  const [indice, setIndice] = useState(0)
  const [preview, setPreview] = useState<string | null>(null)
  const [fotosTiradas, setFotosTiradas] = useState<Record<string,string>>({})

  const lista = veiculo === "carro" ? fotosCarro : fotosMoto

  // FINALIZAR
  async function finalizar(){

    const urls: any = {}

    for(const nome of filaFotos){

      const base64 = fotosTiradas[nome]

      const formData = new FormData()
      formData.append("image", base64.split(",")[1])

      const res = await fetch(`https://api.imgbb.com/1/upload?key=0622c9e1bc2eaa66e70fb3c76a6c2a11`,{
        method:"POST",
        body:formData
      })

      const data = await res.json()
      urls[nome] = data.data.url
    }

    console.log(urls)

    alert("Vistoria finalizada!")

    window.location.href = "https://wa.me/55SEUNUMERO?text=Vistoria%20finalizada"
  }

  return (
    <div className="min-h-screen flex items-center justify-center from-indigo-900 to-purple-900">

      <div className="bg-white p-6 rounded-xl w-[320px] text-center">

        {/* INSTRUÇÕES */}
        {step === "instrucoes" && (
          <>
            <h2 className="font-bold text-purple-700">Bem-vindo</h2>

            <p className="text-sm mt-2">
              Use o celular deitado para tirar as fotos corretamente
            </p>

            <button
              onClick={() => setStep("veiculo")}
              className="bg-blue-600 text-white p-2 mt-4 rounded"
            >
              Fechar
            </button>
          </>
        )}

        {/* VEICULO */}
        {step === "veiculo" && (
          <>
            <h2>Escolha o veículo</h2>

            <button onClick={() => {setVeiculo("carro"); setStep("modo")}}>
              Carro
            </button>

            <button onClick={() => {setVeiculo("moto"); setStep("modo")}}>
              Moto
            </button>
          </>
        )}

        {/* MODO */}
        {step === "modo" && (
          <>
            <h2>Tipo de vistoria</h2>

            <button
              onClick={() => {
                setFilaFotos(lista)
                setIndice(0)
                setStep("foto")
              }}
            >
              Completa
            </button>

            <button onClick={() => setStep("especifica")}>
              Específica
            </button>
          </>
        )}

        {/* ESPECIFICA */}
        {step === "especifica" && (
          <>
            <h2>Escolha as fotos</h2>

            <div className="max-h-40 overflow-y-auto">
              {lista.map((f) => (
                <label key={f} className="block">
                  <input
                    type="checkbox"
                    onChange={(e)=>{
                      if(e.target.checked){
                        setSelecionadas([...selecionadas, f])
                      }else{
                        setSelecionadas(selecionadas.filter(x=>x!==f))
                      }
                    }}
                  />
                  {f}
                </label>
              ))}
            </div>

            <button
              onClick={()=>{
                setFilaFotos(selecionadas)
                setIndice(0)
                setStep("foto")
              }}
            >
              Iniciar
            </button>
          </>
        )}

        {/* FOTO */}
        {step === "foto" && (
          <>
            <h2>{filaFotos[indice]}</h2>

            <img
              src={`/fotos/${veiculo}/${filaFotos[indice]}.jpeg`}
              className="mb-2"
            />

            <CameraInput
              onCapture={(img)=>{
                setPreview(img)
                setFotosTiradas({...fotosTiradas, [filaFotos[indice]]: img})
                setStep("preview")
              }}
            />
          </>
        )}

        {/* PREVIEW */}
        {step === "preview" && (
          <>
            <h2>Comparar</h2>

            <img src={`/fotos/${veiculo}/${filaFotos[indice]}.jpeg`} />
            <img src={preview!} />

            <button onClick={()=>setStep("foto")}>Refazer</button>

            <button
              onClick={()=>{
                if(indice === filaFotos.length -1){
                  setStep("final")
                }else{
                  setIndice(indice+1)
                  setStep("foto")
                }
              }}
            >
              Continuar
            </button>
          </>
        )}

        {/* FINAL */}
        {step === "final" && (
          <>
            <h2>Finalizado</h2>

            <button onClick={finalizar}>
              Falar com consultor
            </button>
          </>
        )}

      </div>
    </div>
  
  )
}