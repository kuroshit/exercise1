import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of the component'
  const exercise3 = 14
  
  const part = [part1, part2, part3]
  const exercise = [exercise1, exercise2, exercise3]

  return (
    <div>
      <Header course={course} />
      <Content part={part} exercise={exercise} />
      <Total exercise={exercise} />
    </div>
  )
}

export default App
