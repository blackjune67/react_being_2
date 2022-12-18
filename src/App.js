import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {

    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (e) => setKeyword(e.target.value);
    // console.log('안녕?')

    // * 한번만 실행
    useEffect(() => {
        console.log('한번만 실행');
    }, []);

    // * keyword가 지켜보는 경우 실행
    useEffect(() => {
        if(keyword !== "" && keyword.length > 5) {
            console.log('키워드가 변화할 때 실행 ', keyword)
        }
    }, [keyword])

    // * 특정경우(keyword, counter) 지켜보는 경우 실행
    /*useEffect(() => {
        console.log('searchbar, counter');
    },[keyword, counter]);*/

    return (
        <div>
            {<input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder={"get ready search"}
            />}
                {/*<h1 className={styles.title}>Welcom back!!!</h1>*/}
                <h3 className={styles.title}>{counter}</h3>
                {/*<Button text={"Continue"}/>*/}
                {/*<Button onClick={onClick} text={"click Me!"}/>*/}
                <button onClick={onClick}>Click me!</button>
        </div>
);
}

export default App;
