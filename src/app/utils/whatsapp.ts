export const MY_PHONE = {
  masked: '(11) 96348-5429',
  unmasked: '11963485429',
}

export const whatsappCustomMessage = (phone: string, text: string) => {
  const message = `https://api.whatsapp.com/send?phone=55${phone}&text=${text}`

  return encodeURI(message)
}
