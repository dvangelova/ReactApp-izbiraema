import React from 'react';
export default class CreateTask extends React.Component {
    render(){
        return (
            <div className="form">
                <h2 className="center-title">Create a new task</h2>
                <div><input type="text" placeholder="Task Title"></input></div>
                <div><textarea placeholder="Description"></textarea></div>
                <div><input type="text" placeholder="Estimated Time (in hours)"></input></div>
                <div><label for="select-status">
                        <select name="select-status" id="">
                            <option value="status" disabled selected>Status</option>
                            <option value="appending">appending</option>
                            <option value="completed">completed</option>
                        </select>
                    </label></div>
                <button>Create</button>
            </div>
        )
    }


}
