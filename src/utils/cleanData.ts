export const cleanData = (
  data: Record<string, any>[]
): Record<string, any>[] => {
  return data.map(item => {
    const newItem: Record<string, any> = {}
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        const cleanedKey = key.replace(/^[\s\uFEFF\xA0]+/, '') // Remove non-printable characters
        newItem[cleanedKey] = item[key]
      }
    }
    return newItem
  })
}
