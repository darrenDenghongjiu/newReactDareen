import React from 'react';


const Test1 = React.createClass({
    getInitialState(){
        return {
            nameOne: ''
        };
    },
    componentDidMount(){
        this.setState({
            nameOne: sessionStorage.nameOne
        });
    },

    render(){
        return (
            <div>
                {this.state.nameOne}
            </div>
        );
    }
});

export default Test1;