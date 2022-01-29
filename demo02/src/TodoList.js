import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button, Input, List} from 'antd'
import store from './store';
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators'
import axios from 'axios'

import TodoListUi from './TodoListUI';

// const data=[
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue=this.changeInputValue.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    // state = {  }
    render() { 
        return ( 
            <TodoListUi 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
         );
    }
    changeInputValue(e){
        // console.log(e.target.value)
        // const action ={
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        // store.dispatch(action)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        // console.log('cyq')
        // const action = {type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        // console.log(index);
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //利用axios获取数据
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res)
        })
    }
}
 
export default TodoList;