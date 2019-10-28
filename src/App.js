import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ pesrsonState , setPersonState ] = useState({
    persons:[
      {name:'robert', age : 34},
      {name:'janice',age: 4},
      {name:'rachel',age: 35}
    ]
  });

  const [ otherState , setOtherState ] = useState('some randomvalue');

  const swicthNameHandler = () => {
    
    setPersonState({
      persons:[
        {name:'Maria', age : 34},
        {name:'anand',age: 4},
        {name:'rachel', age : 5}
      ]
    });
    console.log(pesrsonState,otherState);
  };

  console.log(pesrsonState,otherState);
  return ( 
    <div className="App">
    <h1>Hi I , a react app</h1> 
    <p>This is a really working</p>
    <button onClick={swicthNameHandler}>Switch Name</button>
    <Person name={pesrsonState.persons[0].name} age={pesrsonState.persons[0].age}></Person>
    <Person name={pesrsonState.persons[1].name} age={pesrsonState.persons[1].age}>My hobbiles is racing</Person>
    <Person name={pesrsonState.persons[2].name} age={pesrsonState.persons[2].age}></Person>
    </div>
  )
}

export default App;