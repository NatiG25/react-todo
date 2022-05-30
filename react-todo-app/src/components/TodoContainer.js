import React from "react";

export default class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                  id: 1,
                  title: "Setup development environment",
                  completed: true
                },
                {
                  id: 2,
                  title: "Develop website and add content",
                  completed: false
                },
                {
                  id: 3,
                  title: "Deploy to live server",
                  completed: false
                }
              ]
        }
    }
    render() {
        return (
            <React.Fragment>
        <ul>
            {this.state.todos.map(task => {
                return <li>{task.title}</li>
            })}
        </ul>
      </React.Fragment>
        )
    }
}

