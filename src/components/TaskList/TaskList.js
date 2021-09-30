import { AiFillDelete, AiFillEdit, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import moment from 'moment';

//Component
import EmptyList from '../EmptyList/EmptyList'

export default function TaskList(props) {

    let tasks
    tasks = props.tasks

    if (tasks.length > 0) {
        return(
            <div className="card">
                <div className="table-container">
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
                                <td className="task-description-td">
                                    <div className="description-container">
                                        {task.description}
                                    </div>
                                </td>
                                <td className="time-ago">
                                    <div className="time-ago-container">
                                        {moment(task.date).fromNow()}
                                    </div>
                                </td>
                                { task.done === 0 ? 
                                <td className="td-badge">
                                    <span className="badge bg-warning animate__animated animate__fadeInUp">
                                        undone
                                    </span>
                                </td> 
                                    :  
                                <td className="td-badge">
                                    <span className="badge bg-success animate__animated animate__bounceInUp">
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
            </div>
        )
    } else {
        return (
            <EmptyList/>
        )
    }
    
}