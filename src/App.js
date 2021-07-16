import React from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/homepage.page';

const Topics =  (props) => {
  console.log(props)
  return (
    <div><h1>Topics</h1></div>
  )
  }
const TopicsDetails =  (props) => {
  console.log(props)
  return (
      
      <div>
        <Link to='/topics'> Topics </Link>
        <button onClick={() => props.history.push('/topics')}>Take me to topics</button>
        <h1>Topics Details --- {props.match.params.topicId}</h1>
      </div>
  )
}

const HatsPage = () => (
  <div>HATS page</div>
)

function App() {
  return (
    <div>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={Topics} />
        <Route exact path='/topics/:topicId' component={TopicsDetails} />

    </div>
  );
}

export default App;
