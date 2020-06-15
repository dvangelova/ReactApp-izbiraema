import React from 'react';

export default class CreateUser extends React.Component {
    render(){
        return (
            <div className="form">
                <h2 className="center-title">Create a new user</h2>                
                
                <div><input type="text" placeholder="Username"></input></div>
                <div><input type="email" placeholder="E-mail"></input></div>
                <div><input type="password"  placeholder="Password"></input></div>

                <div>
                    <select name="select-admin" id="">
                        <option value="status" disabled selected>Admin Rights</option>
                        <option value="appending">yes</option>
                        <option value="completed">no</option>
                    </select>
                </div>
                <div className="create-buttons">
                <button>Create</button>
                <button>Delete</button>
                </div>
            </div>
        )
    }


}
