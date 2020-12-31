import React,{Component} from "react";
import ReactDOM from "react-dom";

// class 组件传值 

const user  = {
    name: "test",
    age: 10
}


// 基于 class 关键字创建组件
class SayHello extends Component {
  // 在组件内部必须有 reder 函数，render 函数必须返回合法的 JSX 虚拟DOM结构
  render() {
    return <div>这是一个 class 创建的组件--- {this.props.name} --- {this.props.age}</div>;
  }
}

ReactDOM.render(<SayHello {...user}/>, document.getElementById("app"));
