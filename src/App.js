import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((rs) => rs.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : <ul>
                {
                    coins.map((coins, index) => <li key={index}>{coins.name} ({coins.symbol}) :
                        ${coins.quotes.USD.price}</li>)

                }
            </ul>}

        </div>
    );
}

export default App;
