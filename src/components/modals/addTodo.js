import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { useToasts } from 'react-toast-notifications';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../../actions/todo';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderStyle           : 'none',
      boxShadow             : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      borderRadius          : '0.25rem'
    }
};

Modal.setAppElement('#root')

const AddTodoModal = ({ modalIsOpen, closeModal, addTodo }) => {
    const { addToast } = useToasts()
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("")
    const [progress, setProgress] = useState("")
    const [note, setNote] = useState("")

    useEffect(() => {
        setTitle("")
        setPriority("")
        setProgress("")
        setNote("")
    }, [])

    // Add new Todo item
    const handleAddTodo = (e) => {
        e.preventDefault()
        const item = {
            "id": uuidv4(),
            "title": title,
            "priority": priority,
            "progress": progress,
            "note": note
        }
        addTodo(item)
        addToast('Successfully created new Todo item', { appearance: 'success' })
        closeModal()
    }

    return (
        <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add Todo"
            >
            <form className="flex flex-col" style={{width: '50vw'}}>
                <p className="text-xl font-semibold ">Add Todo</p>
                <p className="text-xl text-gray-500 mb-10">Create a new ToDo list item</p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" 
                        type="text" 
                        placeholder="Get Job at Raffle.ai"
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Priority
                    </label>
                    <select 
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="priority"
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                    >
                    <option value="">Select priority</option>
                    <option value="important">important</option>
                    <option value="no rush">no rush</option>
                    <option value="whenever">whenever</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Progress
                    </label>
                    <select 
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="progress"
                        value={progress}
                        onChange={e => setProgress(e.target.value)}
                    >
                    <option value="">Where you at in the process?</option>
                    <option value="open">open</option>
                    <option value="in progress">in progress</option>
                    <option value="solved">solved</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Note
                    </label>
                    <div className="flex">
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="note"
                            type="text" 
                            placeholder="Ace the code challenge"
                            value={note}
                            onChange={e => setNote(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="flex justify-end items-center w-full mt-8 mb-4">
                    <button 
                        className="text-red-500 p-2 mr-6"
                        onClick={closeModal}
                    >
                    CANCEL
                    </button>
                    <button 
                        className="bg-blue-500 text-white p-2 leading-none border rounded"
                        onClick={handleAddTodo}
                    >
                    SAVE
                    </button>
                </div>
            </form>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddTodoModal);