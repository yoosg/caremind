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
      choice: '2'
    },
    {
      id: 1,
      content: '좋은 글입니다!!!!',
      date: addDate,
      choice: '1'
    },
    {
      id: 2,
      content: '두번째 글입니다!!!!',
      date: addDate,
      choice: '1'
    },
    {
      id: 3,
      content: '두번째 질문입니다!!!!',
      date: addDate,
      choice: '2'
    },
    {
      id: 4,
      content: '3번 글입니다!!!!',
      date: addDate,
      choice: '1'
    },
    {
      id: 5,
      content: '3번 질문입니다!!!!',
      date: addDate,
      choice: '2'
    },
    {
      id: 6,
      content: '좋은 글입니다!!!!',
      date: addDate,
      choice: '1'
    },
    {
      id: 7,
      content: '좋은 질문입니다!!!!',
      date: addDate,
      choice: '2'
    },
    {
      id: 8,
      content: '마지막 글입니다!!!!',
      date: addDate,
      choice: '1'
    },
    {
      id: 9,
      content: '마지막 질문입니다!!!!',
      date: addDate,
      choice: '2'
    },
    {
      id: 10,
      content: '좋은 글입니다!!!!',
      date: addDate,
      choice: '1'
    }
  ]
}
export default data
