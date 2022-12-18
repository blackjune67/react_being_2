import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const [todo, setTodo] = useState("");
    const onChange = (e) => {
        console.log('==> : ', todo);
        setTodo(e.target.value);
    };

    return <div>
        <input
            onChange={onChange}
            value={todo}
            type="text" placeholder={"Write your to do..."}/>
    </div>
}

export default App;
