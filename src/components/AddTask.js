import React, { useState } from "react";
import './styled.css';

export default function AddTask() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleSubmitForm = function(event) {
        event.preventDefault();
        if (task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask("");
        }
    };

    return (

        <div className="tarefa">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={handleSubmitForm}>
                <div>
                    <input
                        className="tamanho_fonte"
                        type="text"
                        placeholder="Entre com sua tarefa"
                        value={task}
                        onChange={(event) => setTask(event.target.value)}
                    />
                    <div>
                        <input className="btn" type="submit" value="Cadastrar"/>
                    </div>
                </div>
            </form>

            <ul className="tabela">
                {taskList.map((item, index) => (
                    <li  key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
