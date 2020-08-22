import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from "@blueprintjs/core";
import { useToasts } from 'react-toast-notifications';

import { deleteTodo } from '../../actions/todo';
import EditTodoModal from '../modals/editTodo';

const TodoListItem = ({ todo, deleteTodo }) => {
    const { addToast } = useToasts()
    const itemColor = todo.priority === "important" ? 'bg-red-600' : todo.priority === "no rush" ? 'bg-purple-500' : 'bg-green-500'
    const solvedStyle= todo.progress === "solved" && 'bg-gray-300'
    const [editModalIsOpen, setEditModalOpen] = useState(false);

    const openModal = () => {
        setEditModalOpen(true)
    }

    const closeModal = () => {
        setEditModalOpen(false)
    }

    return (
        <>
        <div className={`flex flex-row w-full rounded shadow-md mb-4 p-2 ${solvedStyle}`}>
            <span className={`${itemColor} w-8 h-4 rounded self-center ml-4 mr-4`}></span>
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center text-gray-500 mt-2 mb-4">
                    <span>{todo.priority}</span>
                    <span>{todo.progress}</span>
                </div>
                <span className="text-lg font-semibold">{todo.title}</span>
                <span className="text-md text-gray-500">{todo.note}</span>
                <div className="flex flex-row justify-end items-center">
                    <button 
                        className="bg-red-500 text-white ml-2 rounded p-2"
                        onClick={() => { deleteTodo(todo); addToast('Successfully removed item', { appearance: 'info' })}}
                    >
                        <Icon icon="trash" iconSize={15}/>
                    </button>
                    <button 
                        className="bg-blue-500 text-white ml-2 rounded p-2"
                        onClick={() => openModal()}>
                        <Icon icon="edit" iconSize={15}/>
                    </button>
                </div>
            </div>
        </div>
        <EditTodoModal editModalIsOpen={editModalIsOpen} closeModal={closeModal} todo={todo}/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (title) => dispatch(deleteTodo(title))
})

export default connect(null, mapDispatchToProps)(TodoListItem);