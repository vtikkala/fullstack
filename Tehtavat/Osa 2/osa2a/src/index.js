import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    const { header } = props
    return (
        <>
            <h1>{header}</h1>
        </>
    )
}

const Content = (props) => {
    const { content } = props
    return (
        <>
            <Part1 part1={content.part1} exercises1={content.exercises1} />
            <Part2 part2={content.part2} exercises2={content.exercises2} />
            <Part3 part3={content.part3} exercises1={content.exercises3} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>yhteensä {props.total} tehtävää</p>
        </>
    )
}

const Part1 = (props) => {
    return (
        <>
            <p>{props.part1} {props.exercises1}</p>
        </>
    )
}

const Part2 = (props) => {
    return (
        <>
            <p>{props.part2} {props.exercises2}</p>
        </>
    )
}

const Part3 = (props) => {
    return (
        <>
            <p>{props.part3} {props.exercises3}</p>
        </>
    )
}

const Course = (props) => {
    console.log(props)
    
    return (
        <>
            <Header header = {props.course.name} />
            <Content content = {props.course.parts} />

            <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
            <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
            <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
        </>
    )

}


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10,
                id: 1,
            },
            {
                name: 'Tiedonvälitys probseilla',
                exercises: 7,
                id: 2
            },
            {
                name: 'Komponenttien tila',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));