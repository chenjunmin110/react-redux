// 这是一个action函数

const sendAction = () => {
  return {
    type: 'send_type',
    value: '这是一个sendAction'
  }
}

module.exports = {
  sendAction,
}