import React from 'react';
import './Task.css';

const Task = (props) => {

  const style = {
    color: '#cf2f2f',
  }

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
          <button className="doneBtn" onClick={() => props.change(id)}>Zrobione</button>
          <button className="deleteBtn" onClick={() => props.delete(id)}>x</button>
        </p>

      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>

        <p>
          <strong>{text}</strong><em> (zrobić do: {date})</em><br />
          - wykonane: <span>{finish}</span>

          <button className="deleteBtn" onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    )
  }
}

export default Task;