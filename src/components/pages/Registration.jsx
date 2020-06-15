import React from 'react';
import { withRouter } from 'react-router';

class Registration extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    }

    addNewUser = () => {
        localStorage.setItem('current-user', JSON.stringify(this.state));
        const newUser = this.state;
        const users = JSON.parse(localStorage.getItem('users'));
        if (users && users.length !== 0) {
            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            localStorage.setItem('users', JSON.stringify([newUser]));
        }
        this.props.history.push('/');

    }
    
    render() {
        return (
            <div className="form">
                <h2 className="center-title">Register a new account</h2>
                <div><input type="text" placeholder="Username" onChange={e => this.setState({username: e.target.value})}></input></div>
                <div><input type="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})}></input></div>
                <div><input type="password"  placeholder="Password" onChange={e => this.setState({password: e.target.value})}></input></div>

                {true && <p className="error-msg">Please input valid details !Error!</p>}


                <button onClick={this.addNewUser}>Register</button>
            </div>
        )
    }
}

export default withRouter(Registration);