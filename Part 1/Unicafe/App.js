import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const Statistics = (props) =>{
 if (props.good == 0 && props.neutral == 0 && props.bad == 0){
    return(
      <p>No feedback given</p>
      )
  }
  const all = props.good + props.neutral + props.bad
  const average = all / 3
  const positive = props.good/all
  return(
    <div>
    <table>
      <tr>
        <td>Good</td>
        <td>{props.good}</td>
      </tr>
       <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
      </tr>
       <tr>
        <td>All</td>
        <td>{all}</td>
      </tr>
       <tr>
        <td>Average</td>
        <td>{average}</td>
      </tr>
       <tr>
        <td>Positive</td>
        <td>{positive}</td>
      </tr>

    </table>


    </div>


    )
}

const App=()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return(
    <div>
    <h1> Give Feedback </h1>
    <br/>
    <button onClick={()=>setGood(good+1)}>Good</button>
    <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
    <button onClick={()=>setBad(bad+1)}>Bad</button>


    <h2> Statistics </h2>
    < Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )

}

export default App;

