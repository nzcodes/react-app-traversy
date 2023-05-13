import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} 
      <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/> </h3>
      <h3>{task.day}</h3>
    </div>
  )
}

export default Task


// At the last component of the hierarchy, html tags are returned.
// onClick event listener from FaTimes calling onDelete function.
// onDoubleClick event listener calling onToggle function.