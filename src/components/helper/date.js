export const parsingDMY = (date) => {
  const obj = new Date(date)
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return `${obj.getDate()} ${month[obj.getMonth()]} ${obj.getFullYear()}`
}