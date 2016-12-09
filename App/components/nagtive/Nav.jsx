import React from 'react';
/*引入多张图片的时*/
var json = {
	src:require('./12.jpg'),
	src1:require('./123.jpg'),
	//sup:require('../../outfun.js'),
} 
/*取得与父级同级别的文件../*/
//console.log(json.src):
//import goBtn from '12.jpg';
require('./navcss.scss');



class Nav extends React.Component{
	constructor(props){
		super(props);
		//this.clickHandler = this.clickHandler.bind(this);
		//函数同一绑定可以避免先加载
		this.clickHandler = this.clickHandler.bind(this);
		console.log(props);
	}
	
	componentDidMount(){
	   if(this.props.active){
		   var aList = document.querySelectorAll('#list li');
		   console.log(this.props.active-1);
		   aList[this.props.active-1].className = "headstyle active";
	   }
    }
	componentWillReceiveProps(nextProps){
		 //6.componentWillReceiveProps
       //组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
		/*当调用这个组件的js改变props可以监听的到*/
		console.log(nextProps);
		
	}
	componentWillUpdate(){
		//接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
	   /*当调用这个组件的js改变props可以监听的到*/
	}
	clickHandler(index){
		location.href = location.origin + '#/'+index;
	}
	componentDidUpdate(){
		
		/*当调用这个组件的js改变props可以监听的到，props的值已经插入dom以后可以访问*/
	}
	componentWillUnmount(){
		/*当组件销毁以前调用清除代理*/
	}
    render() {
        return (
            <ul id={'list'}>
               <li className={'headstyle'} onClick={this.clickHandler.bind(this,'login')}>1111111111</li>
			   <li className={'headstyle'} onClick={this.clickHandler.bind(this,2)}>2222222222</li>
			   <li className={'headstyle'} onClick={this.clickHandler.bind(this,3)}>3333333333</li>
               <li className={'headstyle'} onClick={this.clickHandler.bind(this,4)}>522224</li>
			   <li><img  src={json.src1} /></li>
            </ul>
        )
    }
};
export default Nav;
