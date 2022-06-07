import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function TaskForm(props) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const submit = (e) => {
      //proyectoDonPedos
        e.preventDefault();
        let httpData = {'title': name, 'description': description}
        axios.post('http://127.0.0.1:8000/api/addTask', httpData)
        .then(response => {
            const { message } = response.data;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2000
              })
            props.update()
            setName("")
            setDescription("")
            document.getElementById('task-name').value=null;
            document.getElementById('task-description').value=null;
        })
        .catch(err => {
            const { message } = err.response.data
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: message,
              showConfirmButton: false,
              timer: 2000
            })
        })
    }

    return(
        <form onSubmit={submit}>
          <div className="card add-task-form">
            <h2 id="task-form-id">Create new task</h2>
           <div className="form-group">
              <label className="col-form-label mt-4" htmlFor="inputDefault">Name</label>
              <input    type="text"
                        className="form-control" 
                        placeholder="New task name" 
                        id="task-name"
                        onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea" className="form-label mt-4">Description</label>
              <textarea className="form-control" 
                        id="task-description" 
                        rows="3" 
                        placeholder="Task description"
                        onChange={e => setDescription(e.target.value)}/>
            </div>
            <div className="form-group task-button-submit">
                <button type="submit" className="btn btn-primary">Add Task</button>
            </div>
          </div>
        </form>
    )
}