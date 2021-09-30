import React, {useState, useEffect} from 'react';

export default function EditTaskForm(props) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect( () => {
        setName(props.title)
        setDescription(props.description)
    }, [] )

    function prepareToEdit(e) {
        e.preventDefault()
        props.edit(name, description)
    }

    return(
        <div id="update-task-layout">
            <form onSubmit={prepareToEdit} className="black-bg">
                <div className="card edit-task-form animate__animated animate__swing">
                    <button className="btn btn-danger btn-close-edit" 
                            type="button"
                            onClick={props.close}>
                                X
                    </button>
                    <h2 id="task-form-id">Update Task</h2>
                <div className="form-group">
                    <label className="col-form-label mt-4" htmlFor="inputDefault">Title</label>
                    <input    type="text" 
                                className="form-control" 
                                placeholder="New task name" 
                                id="task-name"
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
                    <textarea className="form-control" 
                                id="task-description" 
                                rows="3" 
                                placeholder="Task description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group task-button-submit">
                        <button type="submit" className="btn btn-primary">Update Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}