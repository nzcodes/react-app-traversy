import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h3>{task.text} 
      <FaTimes style={{color: 'red', cursor: 'pointer'}}
      onClick={() => onDelete(task.id)}/> </h3>
      <h3>{task.day}</h3>
    </div>
  )
}

export default Task


// At the last component of the hierarchy, html tags are returned.
// onDelete prop is called with onClick event listener.
