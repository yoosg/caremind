const date = new Date()
const addDate =
  date.getFullYear() +
  (date.getMonth() + 1 < 10
    ? '-0' + (date.getMonth() + 1)
    : '-' + (date.getMonth() + 1)) +
  (date.getDate() < 10 ? '-0' + date.getDate() : '-' + date.getDate())
const data = {
  date: addDate,
  list: [
    {
      id: 0,
      content: '좋은 질문입니다~~!!',
      date: addDate,
      choice: 1
    },
    {
      id: 1,
      content: '좋은 글입니다!!!!',
      date: addDate,
      choice: 0
    }
  ]
}
export default data
