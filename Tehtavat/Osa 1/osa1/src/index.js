import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return <h1>{props.header}</h1> 
}

const Statistic = (props) => {
    return (
        <>
            {props.result} {props.clicks} <br />
        </>
    )
}

const Positive = (props) => {
    return (
        <>
            {props.name} {(props.value * 100).toFixed(0) + ' %'} 
        </>
    )
}

const NoResult = () => {
    return <p>Ei yhtään palautetta annettu</p>
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text} </button>
)

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

    const handleGoodClick = () => {
        setToGood(good + 1)
    }

    const handleNeutralClick = () => {
        setToNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setToBad(bad + 1)
    }

    if ((good + neutral + bad) == 0) {
        return (
            <div>
                <Header header={header} />
                <Button handleClick={handleGoodClick} text='hyvä'/>
                <Button handleClick={handleNeutralClick} text='neutraali' />
                <Button handleClick={handleBadClick} text='huono' />    
                <Header header={statistics} />
                <NoResult />
            </div>
        )
    } else {

        return (
            <div>
                <Header header={header} />
                
                <button onClick={() => setToGood(good + 1)}>hyvä</button>
                <button onClick={() => setToNeutral(neutral + 1)}>neutraali</button>
                <button onClick={() => setToBad(bad + 1)}>huono</button>

                <Header header={statistics} />
                <Statistic result='hyvä' clicks={good} />
                <Statistic result='neutraali' clicks={neutral} />
                <Statistic result='huono' clicks={bad} />
                <Statistic result='yhteensä' clicks={good + neutral + bad} />
                <Statistic result='keskiarvo' clicks={(good * 1 + neutral *0 + bad * (-1)) / (good + neutral + bad)} />
                <Positive name='positiivisia' value={good / (good + neutral + bad)} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));