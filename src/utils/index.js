export const getDeliveryDate = addDays => {
  const actualData = new Date()
  return (
    actualData.getDate() +
    addDays +
    '/' +
    (actualData.getMonth() + 1) +
    '/' +
    actualData.getFullYear()
  )
}

export const actualDate = () => {
  const actualData = new Date()
  return (
    actualData.getDate() +
    '/' +
    (actualData.getMonth() + 1) +
    '/' +
    actualData.getFullYear()
  )
}
