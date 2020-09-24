import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Switch } from 'react-router-dom'


const Home = () => <h1>You are home</h1>
const NoMatch = () => <h1>404 Not Found</h1>
const Mercedes =() => (
    <h1>Mercedes Page</h1>
)
const Ferrari =() => (
    <h1>Ferrari Page</h1>
)
const Porsche =() => (
    <h1>Porsche Page</h1>
)
const Lamborghini =() => (
    <h1>Lamborghini Page</h1>
)
  


function App() {
  return (
    <div>
    <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
    <li>
    <Link to="/">Home</Link>
    </li>
      <li>
      <Link to="/Mercedes">Mercedes</Link>  
      </li>
      <li>
      <Link to="/Ferrari">Ferrari</Link>
      </li>
      <li>
      <Link to="/Porsche">Porsche</Link>
      </li>
      <li>
      <Link to="/Lamborghini">Lamborghini</Link>
      </li>
    </ul>
    </nav>
    
      <Switch>
        <Route exact path="/" component={Home} />       
        <Route path="/Mercedes" component={Mercedes}/>
        <Route path="/Ferrari" component={Ferrari} />
        <Route path="/Porsche" component={Porsche} />
        <Route path="/Lamborghini" component={Lamborghini} />
        <Route component={NoMatch} />
      </Switch>
     
    </div>
  )
}

export default App;