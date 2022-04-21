import { REACT_ELEMENT } from "./stants"
import { toObject } from "./utils"

function createElement(type,config,children) {

  let key,ref
  if (config) {
    key =config.key
    ref = config.ref
    delete config.key
    delete config.ref
  }
  //处理children
  let props = {...config}
    if (config) {
      if(arguments.length>3){
        //这句很骚
        props.children = Array.prototype.slice.call(arguments,2).map(toObject)
      }else if(arguments.length===3){
        props.children = toObject(children)
      }
    }
  return{
    $$typeofs:REACT_ELEMENT,
    key, //diff算法使用
    ref, //获取真实dom
    type,
    props
  }
}

class Component{
  constructor(props){
    this.props = props
    this.state = {}
  }
}
const React = {
  createElement,
  Component
}

export default React

