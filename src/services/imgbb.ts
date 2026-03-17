// services/imgbb.ts
export async function enviarParaImgBB(base64: string, nomeFoto: string) {

  const apiKey = "SUA_API_KEY"
  const base64Limpo = base64.split(",")[1]

  const formData = new FormData()
  formData.append("image", base64Limpo)
  formData.append("name", nomeFoto)

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: formData
  })

  return res.json()
}