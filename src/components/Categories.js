import React from 'react';
import './Categories.css';

const Categories = props => {

    const { todo, del, done, important } = props;

    return (

        <div className="cat">
            {/* <p className="catTitle">Categories:</p> */}
            <button
                className="categoryButton"
                onClick={todo}
            >
                <i className="fas fa-tasks"></i> Tasks to do
            </button>
            <button
                className="categoryButton"
                onClick={done}
            >
                <i className="fas fa-check-square"></i> Done tasks
            </button>
            <button
                className="categoryButton"
                onClick={del}
            >
                <i className="far fa-trash-alt"></i> Deleted tasks
            </button>
            <button
                className="categoryButton"
                onClick={important}
            >
                <i className="fas fa-exclamation"></i> Important tasks
            </button>
        </div>
    );
}

export default Categories;