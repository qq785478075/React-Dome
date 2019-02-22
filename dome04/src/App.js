import React, { Component } from 'react';
import './App.css';
//Redux
class App extends Component {
  constructor(){
    super();
    this.addList = this.addList.bind(this);
    this.AddNum = this.AddNum.bind(this);
  }

  addList(){
    const val  = this.refs.listVal.value;
    //修改存储在state里边的list数据
    this.props.state.dispatch({
      type:'ADD_TODO',
      payload:val
    });
    this.refs.listVal.value = '';//初始化
    // console.log(this.props.state)
  }

  AddNum(){
    this.props.state.dispatch((dispatch,state) => {
      setTimeout(() => {
        dispatch({
          type:'ADD_ONE',
          thunkNum:1
        })
      }, 1000);
    })
  }

  render() {
    const list = this.props.state.getState().list;//获取存储在state里边的数据
    const thunkNum = this.props.state.getState().thunkNum;
    return (
      <div className="App">
        <input type="text" ref="listVal" />
        <button onClick={this.addList}>添加</button>
        <hr/>
        <button onClick={this.AddNum}>+1</button>
        <div>{thunkNum}</div>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
