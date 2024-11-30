import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
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

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total total = {totalExercises} />
    </div>
  )
}

export default App
