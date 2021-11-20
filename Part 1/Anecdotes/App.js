import logo from './logo.svg';
import './App.css';
import {useState} from 'react';





const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [points , setPoints] = useState(new Array(anecdotes.length).fill(0))
  const next = () => {
  const rand = Math.floor(Math.random() * 7);
  setSelected(rand)
  }
  const [mostvotes,setMostVotes] = useState(0)
  const vote = () => {

    const copy = [...points]
    copy[selected] = copy[selected]+1
    setPoints(copy)
    const maxx =  Math.max(...copy)
    for (let i=0 ; i < copy.length ;i++){
      if (maxx == copy[i]){
        setMostVotes(i)
      }
    }

  }

 

  const [selected, setSelected] = useState(0)
  
  return (
    <div>
      <p> {anecdotes[selected]} </p><br/>
      <button onClick={next} >Next Anecdote</button> 
      <button onClick={vote} >Vote!</button> <br/>
      <p>This anecdote has {points[selected]} votes </p>
      <hr/>
      <p><b>The anecdote with most votes is</b></p><br/>
      <p>
        {anecdotes[mostvotes]}
      </p>

    </div>
  )
}


export default App;

