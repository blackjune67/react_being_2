import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

function Hello() {
    function byFn() {
        console.log('byFn')
    }
    // * destroyed 상태를 확인하려면 return 을 하면 된다.
    /*function hiFn() {
        console.log('hiFn')
        return byFn;
    }*/
    useEffect(() => {
        console.log('hiFn');
        return () => console.log('byFn');
    },[])
    return <div>Hello!</div>
}

function App() {
     const [showing, setShowing] = useState(false);
     const onClick = () => setShowing((prev) => !prev)
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "hide" : "show"}</button>
        </div>
    );
}

export default App;
