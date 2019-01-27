import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}

const Content = (props) => {
    return (
        <>
            <Part1 part1={props.part1} exercises1={props.exercises1} />
            <Part2 part2={props.part2} exercises2={props.exercises2} />
            <Part3 part3={props.part3} exercises3={props.exercises3} />
        </>
    )
}

const Part1 = (props) => {
    return <p>{props.part1} {props.exercises1}</p>
}

const Part2 = (props) => {
    return <p>{props.part2} {props.exercises2}</p>
}

const Part3 = (props) => {
    return <p>{props.part3} {props.exercises3}</p>
}

const Total = (props) => {
    return <p>yhteensä {props.total} tehtävää</p>
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }

    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 10
    }
    
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content 
                part1={part1.name}
                part2={part2.name}
                part3={part3.name}
                exercises1={part1.exercises}
                exercises2={part2.exercises} 
                exercises3={part3.exercises} 
            />   
            <Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));