import React from 'react';
import {
    Link
  } from "react-router-dom";
export default class Homepage extends React.Component {

    render(){
        return (
            <div className="card-wrapper">
            <h2 className="center-title">Tasks</h2>
                <div className="card-style task-card">
                    <p className="task-title">Task Title</p>
                    <p>Task Description: </p>
                    <p>Estimated Time: </p>
                    <p>Status: </p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className="card-style task-card">
                    <p className="task-title">Task Title</p>
                    <p>Task Description: </p>
                    <p>Estimated Time: </p>
                    <p>Status: </p>

                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className="card-style task-card">
                    <p className="task-title">Task Title</p>
                    <p>Task Description: </p>
                    <p>Estimated Time: </p>
                    <p>Status: </p>

                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                <div className="card-style task-card">
                    <p className="task-title">Task Title</p>
                    <p>Task Description: </p>
                    <p>Estimated Time: </p>
                    <p>Status: </p>

                    <button>Edit</button>
                    <button>Delete</button>
                </div>

            </div>
        )
    }
}
