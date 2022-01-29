import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button, Input, List} from 'antd'

// 可以修改为无状态组件
class TodoListUi extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder={this.props.inputValue} 
                    style={{width:'250px',marginRight:'10px'}}
                    onChange={this.props.changeInputValue}
                    />
                    <Button 
                    type='primary'
                    onClick={this.props.clickBtn}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List 
                        bordered
                        dataSource={this.props.list}
                        // 这里删除有一点点坑 正序删除以及倒序删除
                        renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoListUi;