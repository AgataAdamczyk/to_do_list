import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      if (a.finishDate > b.finishDate) {
        return -1
      }
      return 0
    })
  }
  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
     <div className="tasks">
       
       <div className="active">
         <table>
           <thead>
             <tr>
               <th className="headToDo">Zadania do zrobienia:</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>{activeTasks.length > 0 ? activeTasks : <p>Brak zadań :)</p>}</td>
             </tr>
           </tbody>
         </table>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th className="headDone">Zadania zrobione: <em>({done.length})</em></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{done.length > 5 && <span style={{ fontSize: 10 }}>wyświetlonych jest jedynie 5 ostatnich zadań</span>}
        {doneTasks.slice(0, 5)}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}

export default TaskList;