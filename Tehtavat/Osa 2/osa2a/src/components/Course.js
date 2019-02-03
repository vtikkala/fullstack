import React from 'react'

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
  
  const total = totals.reduce( (acc, current, currIndex, array) => {
      sum += current.exercises
      return sum
  }, 0)

  return <p>yhteensä {total} tehtävää</p>
}

export default Course