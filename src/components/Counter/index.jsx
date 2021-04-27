import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    }

    runCounter = () =>{
        const {value} = this.state;
        const {step} = this.props;
        this.setState({
            value: value+step,
        });
    };
    render(){
        const {value} = this.state;
        const {step} = this.props;
        return(
            <>
            {value}
            <button onClick={this.runCounter}>RUN</button>
            </>
        )
    }
}

Counter.propTypes = {
    step: function(props,propName){
        const value = props[propName];
        if(
            typeof value !== 'number' || 
            Number.isNaN(value) ||
            !Number.isFinite(value)
        ){
            return new Error('value step is not valid');
        }
    },
};
Counter.defaultProps = {
    step: 1
}
export default Counter;