import React from 'react';


window.onhashchange = function (e){
	var local = e.newURL;
	if(local.indexOf('login')>-1){
		require('./login.scss');
	}
}

class Nav extends React.Component {
   
    constructor(props) {
        super(props);
		this.state = {
			active:1,
		};
		debugger;
		console.log(props);
    }
   //6.componentWillReceiveProps

//组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
	componentWillUnmount(){
		console.log(this);
		/*当组件销毁以前调用清除代理*/
	}
    render() {
		
        return (
            <ul>
               <li>我们的明天会更好</li>
            </ul>
        )
    }
}

export default Nav;