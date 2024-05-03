export const MY_PHONE = {
  masked: '(11) 96826-0475',
  unmasked: '11968260475',
}

export const whatsappCustomMessage = (phone: string, text: string) => {
  const message = `https://api.whatsapp.com/send?phone=55${phone}&text=${text}`

  return encodeURI(message)
}
