import React from 'react';
import { withRouter } from 'react-router';

class Login extends React.Component {
    state = {
        email: "",
        password: "",
    }

    loginUser = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            if(element.email === this.state.email) {
                localStorage.setItem('current-user', JSON.stringify(element));
                this.props.history.push('/');
            } else {
                this.props.history.push('/registration');
            }
        }        
    }


    render(){
        return (
            <div className="form">
                <h2 className="center-title">Login to your account</h2>
                <div><input type="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})} value={this.state.email}></input></div>
                <div><input type="password"  placeholder="Password" onChange={e => this.setState({password: e.target.value})} value={this.state.password}></input></div>
                <button onClick={this.loginUser}>Login</button>
            </div>
        )
    }
}

export default withRouter(Login);