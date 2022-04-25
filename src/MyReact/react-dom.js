import { REACT_TEXT } from './stants';

function render(vdom,container) {
  mount(vdom,container)
}

function mount(vdom, container) {
  let newdom = createDom(vdom);
  console.log(newdom);
  container.appendChild(newdom);
}



function createDom(vdom) {
  let { props, type,content } = vdom;

  console.log(props,'props')
  let dom;
  if (type === REACT_TEXT) {
    dom = document.createTextNode(content);
  }else if(typeof type === 'function'){
    return mountFunctionComponent(vdom)
  }
  else {
    dom = document.createElement(type);
  }

  if (props) {
    updateProps(dom, {}, props);
    let children = props.children
    if(children){
      changeChildren(children,dom)
    }
  }
  return dom
}

function mountFunctionComponent(vdom){
  let {type,props} = vdom
  let functionVdom = type(props)
  return createDom(functionVdom)
}

function changeChildren(children,dom) {
  if (typeof children === 'object'&&children.type) {
    render(children,dom)
  }else if(Array.isArray(children)){
    children.forEach(item => render(item,dom))
  }
}

function updateProps(dom, oldProps, newProps) {
  if (newProps) {
    for (let key in newProps) {
      if (key === 'children') {
        continue;
      } else if (key === 'style') {
        let styleObj = newProps[key];
        for (let arr in styleObj) {
          dom.style[arr] = styleObj[arr];
        }
      } else {
        dom[key] = newProps[key];
      }
    }
  }

  if (oldProps) {
    for (let key in oldProps) {
      if (!newProps[key]) {
        dom[key] = null;
      }
    }
  }
}

const ReactDOM = {
  render,
};

export default ReactDOM;
