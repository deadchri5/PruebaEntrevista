import { AiFillDelete, AiFillEdit, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import moment from 'moment';

export default function TaskList(props) {

    let tasks
    tasks = props.tasks

    if (tasks.length > 0) {
        return(
            <div className="card">
                <table className="table table-hover">
                    <thead className="table-heads">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Time ago</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task, i) => (
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td className="time-ago">{moment(task.date).fromNow()}</td>
                                { task.done === 0 ? 
                                <td className="td-badge">
                                    <span className="badge bg-warning">
                                        undone
                                    </span>
                                </td> 
                                    :  
                                <td className="td-badge">
                                    <span className="badge bg-success">
                                        done
                                    </span>
                                </td> 
                                }
                                <td className="list-actions">
                                    <div className="btn-container">
                                        <button className="btn btn-danger list-button"
                                                onClick={() => props.delete(task.ID)}
                                        >
                                            <AiFillDelete/>
                                        </button>
                                        <button className="btn btn-info list-button"
                                                onClick={ () => props.edit(task.ID, task.title, task.description) } >
                                            <AiFillEdit/>
                                        </button>
                                        {
                                            task.done === 0 ?
                                            <button className="btn btn-success list-button"
                                                onClick={() => props.done(task.ID)} >
                                                    <AiFillCheckCircle/>
                                            </button>
                                            :
                                            <button className="btn btn-warning list-button"
                                                onClick={() => props.done(task.ID)} >
                                                    <AiFillCloseCircle/>
                                            </button>
                                        }
                                    </div>
                                </td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <p>No se encontraron tareas</p>
        )
    }
    
}