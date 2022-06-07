import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

//Import interface components
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

export default function TaskInterface() {

    const [taskArr, setTaskArr] = useState([])
    const [update, setUpdate] = useState(false)
    const [edit, setEdit] = useState(false)
    const [currenID, setCurrentID] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect( () => {
        axios.get('http://161.35.96.89/api/getTasks')
        .then(res => {
            const { tasks } = res.data
            setTaskArr(tasks)
            //console.log(tasks)
        })
        .catch(error => {
            const { message } = error.response.data
            console.log(message)
            //setTaskArr([])
        })
    }, [])

    useEffect( () => {
        axios.get('http://161.35.96.89/api/getTasks')
        .then(res => {
            const { tasks } = res.data
            setTaskArr(tasks)
        })
        .catch(error => {
            const { message } = error.response.data
            //setTaskArr([])
            console.log(message)
        })
    }, [update] )

    function deleteTask(id) {
        let httpData = {'id': id}
        Swal.fire({
            title: 'Do you really want to delete your task?',
            text: "Once deleted, you cannot recave it.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://161.35.96.89/api/deleteTask', {data: httpData})
                .then(res => {
                    const {message} = res.data
                    updateArray()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: message,
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
                .catch(error => {
                    const {message} = error.response.data
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: message,
                        showConfirmButton: false,
                        timer: 2000
                    })
                })
            }
          })

        
    }

    function markAsDone(id) {
        let httpParams = {'id': id}
        axios.put('http://161.35.96.89/api/updateState', httpParams)
        .then(res => {
            const { message } = res.data
            console.log(message)
            updateArray()
        })
        .catch(error => {
            const {message} = error.response.data
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    function getTaskID(id, title, description) {
        setCurrentID(id)
        setTitle(title)
        setDescription(description)
        toggleEditForm()
    }

    function editTask(title, description) {
        let httpParams = {'id': currenID, 'title': title, 'description': description}
        axios.put('http://161.35.96.89/api/updateTask', httpParams)
        .then(res => {
            const {message} = res.data
            updateArray()
            toggleEditForm()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2000
            })
        })
        .catch(error => {
            const {title, description} = error.response.data
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${description} ${title}`,
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    function toggleEditForm() {
        edit === true ? setEdit(false) : setEdit(true)
    }

    function updateArray() {
        update === false ? setUpdate(true) : setUpdate(false)
    }

    return(
        <div id="main-layout">
            {
                edit ? <EditTaskForm 
                            title={title} 
                            description={description}
                            close={toggleEditForm}
                            edit={editTask}/> : ''
            }
            <TaskForm update={updateArray}/>
            <TaskList tasks={taskArr} delete={deleteTask} done={markAsDone} edit={getTaskID}/>
        </div>
    )
}