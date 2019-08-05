import React from 'react';

const ToDo = props => {
  return (
    <div
      className={`task${props.task.completed ? ' purchased' : ''}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default ToDo;