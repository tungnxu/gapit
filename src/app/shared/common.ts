
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