import React from 'react';
import { withRouter } from 'react-router';

class Users extends React.Component {

    deleteUser = (email) => {
        let users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            const element = users[i];
            if(element.email === email) {
                users[i] = null;
            }
        }        
        users = users.filter( u => u );
        if ( users.length == 0 ) {
            localStorage.removeItem('users')
            this.props.history.push('/');
        } else {
            localStorage.setItem('users', JSON.stringify(users));
            this.props.history.push('/users');
        }


    }

    renderUser = (user) => {
        return ( <div className="card-style user-card">
            <p>User: {user.username}</p>
            <p>Email: {user.email}</p>
            <button>View</button>
            <button>Edit</button>
            <button onClick={ () => {
                this.deleteUser(user.email)
            }}>Delete</button>
        </div>)
    }

    render(){
        const users = JSON.parse(localStorage.getItem('users'));

        return (
            <div className="card-wrapper">
                <h2 className="center-title">Users</h2>
                {users && users.length !== 0 && users.map((user) => {
                    return this.renderUser(user)
                })}
            </div>
        )
    }
}

export default withRouter(Users);