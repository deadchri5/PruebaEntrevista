import React from 'react';
import { BiWinkSmile } from 'react-icons/bi'

export default function EmptyList() {
    return(
        <div className="card">
            <div className="card-body d-flex">
                <div className="card-empty-container">
                    <BiWinkSmile className="h1 empty-list-icon"/>
                    <h5 class="card-title">
                        Awesome!, you dont have tasks to do.
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        If you want to add a new task, please fill the form.
                    </h6>
                </div>
            </div>
        </div>
    )
}