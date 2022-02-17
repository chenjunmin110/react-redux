// 这个文件创建reducer，专门用来处理发送过来的action

const initState = {
  value: '默认值',
  count: 0
}

const reducer = (state = initState, action) => {
  
  console.log('reducer:', state, action)
  switch (action.type) {
    case 'send_type':
      return Object.assign({}, state, action);
    case 'add_action':
      return Object.assign({}, state, {count: state.count+1});
    default:
      return state;
  }
}


module.exports = {
  reducer
}