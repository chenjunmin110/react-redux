import React from 'react'

// 导入connect
import {connect} from 'react-redux'

class ComA extends React.Component{
  
  handleClick =() => {
    console.log('ComA:', this.props)
    this.props.sendAction()
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    )
  }
  
}
// 这是一个函数，返回值是一个对象
const mapDispatchToProps = dispatch => {
  return{
    sendAction: () =>{
      dispatch({
        type: 'add_action'
      })
    }
  }
}


// A是发送方，所以要实现connect第二个参数
export default connect(null, mapDispatchToProps)(ComA)