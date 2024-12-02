/* eslint-disable react/prop-types */
import { useState } from "react"
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of the component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total total = {course.parts} />
      <div>
        <p>This is the counter: {counter}</p>
      </div>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
