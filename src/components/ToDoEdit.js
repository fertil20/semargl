import Modal from 'react-modal';
import {useState} from "react";


const ToDoEdit = ({showModal, setShowModal, edit}) => {
    const [change, setChange] = useState("")
    return (
        <Modal isOpen={showModal}>
            <input
                type="text"
                name="todo"
                value={change}
                onChange={(e) => {
                    setChange(e.target.value);
                }}
            />
            <button className="edit-button" onClick={() => {
                if (change !== "") edit(change)
                setShowModal(false)
                setChange("")}}>
                Save changes
            </button>
            <button className="close-button" onClick={() =>
                setShowModal(false)}>
                Cancel
            </button>
        </Modal>
    )
}

export default ToDoEdit;