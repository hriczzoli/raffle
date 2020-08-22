import React, { useState } from 'react';
import { Icon } from "@blueprintjs/core";

import TodoList from './TodoList';
import AddTodoModal from '../modals/addTodo';

const ToDo = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="flex flex-col w-full h-screen items-center">
            <div className="flex flex-col w-3/4 rounded shadow-xl p-8 mt-32 mb-6">
                <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col w-1/2">
                        <p className="text-lg font-semibold">ToDo List</p>
                        <p className="text-gray-400 font-semibold">Plan your day</p>
                    </div>
                    <button className="rounded bg-blue-500 text-white p-2" onClick={openModal}>
                        <Icon icon="add" iconSize={15}/>
                    </button>
                </div>
                <AddTodoModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
                <TodoList />
            </div>
        </div>
    )
}

export default ToDo;