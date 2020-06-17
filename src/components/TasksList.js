import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = props => {

    // console.log(props);

    const active = props.tasks.filter(task => task.active);
    const activeTasks = active.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />
    )
    )

    const done = props.tasks.filter(task => !task.active);
    const doneTasks = done.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />
    )
    )

    const imp = props.tasks.filter(task => task.important);
    const importantTasks = imp.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />
    ))


    const deletedTable = props.trash;
    const deletedTasks = deletedTable.map(task => (
        <Task
            key={task.id}
            task={task}
            delete={props.delete}
            change={props.change}
        />
    ))

    const numberOfCategory = props.show;
    // console.log(numberOfCategory);

    if (numberOfCategory === 1) {
        return (
            <div className="taskListContainer">
                <p>Active tasks: {activeTasks.length}</p>
                <table
                    className="tasksTable"
                >
                    <tbody>
                        <tr className="titleRow">
                            <td>!</td>
                            <td>Task</td>
                            <td>End date</td>
                            <td>Added</td>
                            <td>Actions</td>
                        </tr>
                        {activeTasks}
                    </tbody>
                </table>
            </div>
        );
    } else if (numberOfCategory === 2) {
        return (
            <div className="taskListContainer">
                <p>Done tasks: {doneTasks.length}</p>
                <table
                    className="tasksTable"
                >
                    <tbody>
                        <tr className="titleRow">
                            <td>!</td>
                            <td>Task</td>
                            <td>Added</td>
                            <td>Finished</td>
                            <td>Actions</td>
                        </tr>
                        {doneTasks}
                    </tbody>
                </table>
            </div>
        );
    } else if (numberOfCategory === 3) {
        return (
            <div className="taskListContainer">
                <p>Deleted tasks: {deletedTasks.length}</p>
                <table
                    className="tasksTable"
                >
                    <tbody>
                        <tr className="titleRow">
                            <td>!</td>
                            <td>Task</td>
                            <td>Added</td>
                            <td>Deleted</td>
                            <td>Actions</td>
                        </tr>
                        {deletedTasks}
                    </tbody>
                </table>
            </div>
        );
    } else if (numberOfCategory === 4) {
        return (
            <div className="taskListContainer">
                <p>Important tasks: {importantTasks.length}</p>
                <table
                    className="tasksTable"
                >
                    <tbody>
                        <tr className="titleRow">
                            <td>!</td>
                            <td>Task</td>
                            <td>End date</td>
                            <td>Added</td>
                            <td>Actions</td>
                        </tr>
                        {importantTasks}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default TaskList;