import React  from './MyReact/react';
import ReactDOM from './MyReact/react-dom';

//函数 组件
function FuncComp(props) {
  return React.createElement('h1',{style:{color:'pink'}},`我是函数式组件${props.name}`)
}

//解析后的格式
let element3 = React.createElement(FuncComp,{})

//实现jsx，bable会把jsx=》React.createElement，这里实现React.createElement =》虚拟dom
let element2 = React.createElement("h1",{
  className:"title",
  style:{
    color:"green"
  }
},'这里实现了：',React.createElement('span',{style:{color:"red"}},'jsx'))

let element = <FuncComp name = '77'></FuncComp>

ReactDOM.render(element2, document.getElementById('root'));
ReactDOM.render(element, document.getElementById('root'));
