import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai'

export default function EmptyList() {
    return(
        <div className="card">
            <div className="card-body">
                <div className="card-empty-container">
                    <AiOutlineSmile/>
                    <h5 class="card-title">
                        Awesome!, you dont have tasks to do.
                    </h5>
                </div>
            </div>
        </div>
    )
}