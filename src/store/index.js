import { createStore } from 'redux'

// 导入自己创建的reducer
import { reducer } from '../reducer'


const store = createStore(reducer);


export default store;