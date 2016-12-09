import React from 'react';
const Test = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState(){
        return {
            name: ''
        }
    },
    componentDidMount(){
        this.setState({
            name: '被咯苏州'
        });
    },

    pushTest1(){
        sessionStorage.nameOne = '我是被咯苏州';
        this.context.router.push('/test1');
    },

    render(){
        return (
            <div>
                {this.state.name}
                <button onClick={this.pushTest1}>点击跳转下个界面</button>
            </div>
        );
    }
});

export default Test;