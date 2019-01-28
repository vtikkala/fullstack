import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return <h1>{props.header}</h1> 
}

const Result = (props) => {
    return (
        <p>
            {props.result} {props.clicks}
        </p>
    )
}

const App = () => {
    const header = 'anna palautetta'
    const statistics = 'statistiikka'
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const setToGood = (newValue) => {
        setGood(newValue)
    }

    const setToNeutral = (newValue) => {
        setNeutral(newValue)
    }

    const setToBad = (newValue) => {
        setBad(newValue)
    }

    return (
        <div>
            <Header header={header} />
            
            <button onClick={() => setToGood(good + 1)}>hyvä</button>
            <button onClick={() => setToNeutral(neutral + 1)}>neutraali</button>
            <button onClick={() => setToBad(bad + 1)}>huono</button>

            <Header header={statistics} />
            <Result result='Hyvä' clicks={good} />
            <Result result='Neutraali' clicks={neutral} />
            <Result result='Huono' clicks={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));