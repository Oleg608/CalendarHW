import React, { Component } from 'react';
import styles from './LoginForm.module.scss';
import classNames from 'classnames';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPass: '',
            isPassValid: null,
        };
    }
        handleChange = ({target:{name,value}}) =>{
            this.setState({
                [name]: value,
                isPassValid: !value.includes(" "),
            });
        };
        handleSubmit = (e)=>{
            e.preventDefault();
        }
    render() {
        const {userEmail,userPass,isPassValid} = this.state;
        const passClasses = classNames(styles.input, {
            [styles.inputValid]: isPassValid,
        })
        return (
            <form onSubmit={this.handleSubmit} className={styles.container}>
                <input placeholder = "Your email" type="email" name="userEmail" value={userEmail} onChange={this.handleChange} className={passClasses}/>
                <input placeholder = "Your password" type="password" name="userPass"value={userPass} onChange={this.handleChange} className={passClasses}/>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm;