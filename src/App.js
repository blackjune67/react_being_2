import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setTodo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }

        setToDos(currentArray => [toDo, ...currentArray]);
        setTodo("");
    };
    console.log(toDos);
    return (
        <div>
            <h1>To Do List ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text" placeholder={"Write your to do..."}
                />
                <button>Add To Do</button>
                <hr/>
                <ul>
                    {toDos.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default App;
