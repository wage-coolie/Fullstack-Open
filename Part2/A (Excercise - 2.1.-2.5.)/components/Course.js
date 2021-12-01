import React from 'react'

const Course = ({courses}) => {
  let sum = courses[0].parts.reduce(function  (sum,part) {
    return sum = sum + part.exercises
    },0)
  let sum1 =  courses[1].parts.reduce(function  (sum,part) {
    return sum = sum + part.exercises
    },0)

  return(
    <div>
    <h1>Web Dev Course </h1>
      <p> <strong>{courses[0].name}</strong> </p>
      <ul>
        {courses[0].parts.map (part =>
          <li key = {part.id}> {part.name} {part.exercises} </li>
          )}
      </ul>
      <p><strong>Sum is {sum}</strong>  </p>
      <hr/>
      <p> <strong>{courses[1].name}</strong> </p>
      <ul>
        {courses[1].parts.map (part =>
          <li key = {part.id}> {part.name} {part.exercises} </li>
          )}
      </ul>
      <p><strong>Sum is {sum1}</strong>  </p>

    </div>
    )
}

export default Course;