import React from 'react'

const Navbar = ({ setIsModalOpen, isModalOpen }) => {

    return (
        <header className='p-3 bg-dark text-white'>
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justifiy-content-center justify-content-lg-start gap-3'>
                    <h1>My Task Manager</h1>
                    <button type='button' className='btn btn-warning' onClick={() => setIsModalOpen(!isModalOpen)} >Add Task</button>
                </div>
            </div>

        </header>
    )
}

export default Navbar
