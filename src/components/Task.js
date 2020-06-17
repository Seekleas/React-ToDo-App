import React from 'react';

const Task = props => {

    const style = {
        imp: { fontWeight: 'bold', borderRight: '1px dotted rgba(240, 168, 86, .5)', },
        td: { borderRight: '1px dotted rgba(240, 168, 86, .5)', },
    }

    const { text, date, id, active, important, finishDate, deleted } = props.task;


    if (active && !deleted) {
        const minDate = new Date().toISOString().slice(0, 10);
        const addDate = new Date(minDate).toISOString().slice(0, 10);

        return (
            <tr>
                <td style={style.td}>{important ? 'imp.' : null}</td>
                <td
                    style={important ? style.imp : style.td}
                >
                    {text}
                </td>
                <td style={style.td}>{date}</td>
                <td style={style.td}>{addDate}</td>
                <td>
                    <button
                        className="actions actionDone"
                        onClick={() => props.change(id)}
                    >
                        <i className="fas fa-check-square"></i>
                    </button>
                    <button
                        className="actions actionDelete"
                        onClick={() => props.delete(id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        );


    }


    if (!active && !deleted) {
        const minDate = new Date().toISOString().slice(0, 10);
        const finish = new Date(finishDate).toISOString().slice(0, 10);
        return (
            <tr>
                <td style={style.td}>{important ? 'imp.' : null}</td>
                <td
                    style={important ? style.imp : style.td}
                >
                    {text}
                </td>
                <td style={style.td}>{minDate}</td>
                <td style={style.td}>{finish}</td>
                <td>
                    <button
                        className="actions actionDelete"
                        onClick={() => props.delete(id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </td>


            </tr>
        );
    }

    if (important && !deleted) {
        const minDate = new Date().toISOString().slice(0, 10);
        return (
            <tr>
                <td style={style.td}>{important ? 'imp.' : null}</td>
                <td
                    style={important ? style.imp : style.td}
                >
                    {text}
                </td>
                <td style={style.td}>{date}</td>
                <td style={style.td}>{minDate}</td>
                <td>
                    <button
                        className="actions actionDone"
                        onClick={() => props.change(id)}
                    >
                        <i className="fas fa-check-square"></i>
                    </button>
                    <button
                        className="actions actionDelete"
                        onClick={() => props.delete(id)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    }

    if ((deleted && active) || (deleted && !active) || (deleted && !active && important) || (deleted && active && important)) {
        const minDate = new Date().toISOString().slice(0, 10);
        const finish = new Date(finishDate).toISOString().slice(0, 10);
        return (
            <tr>
                <td style={style.td}>{important ? 'imp.' : null}</td>
                <td
                    style={important ? style.imp : style.td}
                >
                    {text}
                </td>
                <td style={style.td}>{minDate}</td>
                <td style={style.td}>{finish}</td>
                <td>None</td>
            </tr>
        );
    }
}



export default Task;