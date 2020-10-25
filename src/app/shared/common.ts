
export const download = (url: string, name?: string) => {
  const anchor = document.createElement('a')
  anchor.setAttribute('download', name)
  anchor.setAttribute('href', url)
  anchor.setAttribute('target', '_blank')
  anchor.click()
}

export const getFileNameFromUrl = (url: string) => {
  return url.split('/').pop().split('#')[0].split('?')[0]
}

export const getIdYoutube = (url: string) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}