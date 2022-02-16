import React from 'react'

// 导入store
import store from '../../store'

// 导入构建函数action
import { sendAction } from '../../action'


export default class Home extends React.Component{
  
  handleClick =() => {
    
    const action = sendAction()
  
    console.log(action);
    // 发送一个action，利用store
    store.dispatch(action)
  }
  
  componentDidMount () {
    store.subscribe(() => {
      console.log('subscribe:', store.getState())
      this.setState({})
    })
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleClick}>点我点我，发送一个action</button>
        <div>{store.getState().value}</div>
      </>
    )
  }
  
}
