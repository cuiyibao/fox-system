import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
// import Layout from '../components/Layout'
import LoginPage from '../pages/login-page'
import HomePage from '../pages/home-page'
// import NoMatch from '../components/NoMatch'
import '../styles/global.less'

export default class FoxRouters extends React.Component {
  render() {
    return (
      <Router>
        <div className='fox-container'>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/login" component={LoginPage} ></Route>
        </div>
      </Router>
    )
  }
}
