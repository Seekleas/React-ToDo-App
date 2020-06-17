import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: '',
        checked: false,
        date: this.minDate,
        msg: '',
    }

    handleText = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDate = e => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = () => {

        const { text, date, checked } = this.state;

        if (text.length > 2) {

            const add = this.props.add(text, date, checked);

            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                    msg: '',
                })
            }
        } else {
            // console.log(this.state.msg);

            this.setState({
                msg: 'Text must have more than 3 chars.',
            })
            // console.log(this.state.msg);
        }
    }

    render() {

        return (
            <div className="form">
                <input
                    type="text"
                    placeholder="Task to do"
                    value={this.state.text}
                    onChange={this.handleText}
                />

                <label htmlFor="important">
                    <input
                        id="important"
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheckbox}
                    />
                Priority
                </label><br />

                <span className="validation">{this.state.msg}</span><br />

                <label htmlFor="date">
                    <input
                        type="date"
                        value={this.state.date}
                        min={this.minDate}
                        onChange={this.handleDate}
                    />
                    Perform to
                </label><br /><br />

                <button
                    className="addTaskButton"
                    onClick={this.handleClick}
                >
                    <i className="fas fa-plus"></i> Add task
                </button>
            </div>
        )
    }
}

export default AddTask;