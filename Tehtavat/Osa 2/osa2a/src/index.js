import React from 'react'
import ReactDOM from 'react-dom';


const Course = (props) => {    
    return (
        <>
            <Header header = {props.course.name} />
            <Content contents = {props.course.parts} />
            <Total totals = {props.course.parts} />            
        </>
    )
}

const Header = (props) => {
    const { header } = props
    return <h1>{header}</h1>
}

const Content = (props) => {
    const { contents } = props
    
    const rows = () => contents.map(content => 
        <p key={content.id}>
            {content.name} {content.exercises}
        </p>)
    
    return (
        <>
            {rows()}
        </>
    )

}

const Total = (props) => {
    const { totals } = props
    let sum = 0

    totals.forEach(total => {
        sum = sum + total.exercises
    });

    return <p>yhteensä {sum} tehtävää</p>
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
            },
            {
                name: 'Redux',
                exercises: 7,
                id: 4
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