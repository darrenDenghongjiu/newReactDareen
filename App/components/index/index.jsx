import React from 'react';
import Nav from '../nagtive/nav.jsx';
//https://www.npmjs.com/package/react-slick 参数详解
//node_modules\react-slick
//node_modules\react-slick\node_modules\object-assign
//var outfun = require('./outfun.js');
//导入多个某块的情况马上测试

class Index extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			active:1,
		};
		this.rootEl = $('#app');
		this.$ = $;
    }
	
	componentDidMount(){
      // 搜索组件渲染完成 已经出现在dom文档里
	  //getBoundingClientRect 获取客户端的物体信息绝对值；
		//refs of use
		//refs 用于操作本页面的导入模块
		//console.log(this.refs.nav);
		var arr = [1,2,3,4,5];
		//var dom = React.Children.map(arr,function (i){
			//console.log(i);
		//});
		//console.log(dom);
		//console.log(this.refs.city.value=12);
		this.rootEl.on('click','#darren',function (){
			console.log(this);
			this.setState({active:2})
		}.bind(this));
	}
	componentWillMount(){
		//// 组件出现前 就是dom还没有渲染到html文档里面
		
	}
	componentWillUnmount(){
		console.log(this.refs.darren);
		/*当组件销毁以前调用清除代理*/
		this.rootEl.off();
		delete this.rootEl;
	}
    render() {
		let settings = {
            dots: 123,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
			initialSlide:false,
			autoplay:true,
			//variableWidth
        };
        return (
            <div ref="darren" id="darren">  
				<Nav active={this.state.active} ref="nav" />
				<input value={''} ref="city" />
				 <div id={"banner"}>
					 {"moudle_one"}
				 </div>
				 
            </div>
        );
    }
}

export default Index;