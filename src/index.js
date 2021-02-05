import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LegendaryCursor from "legendary-cursor";
import { AnimatePresence } from 'framer-motion';
import Dashboard from './pages/dashboard/dashboard';

window.addEventListener('load', () => {
  LegendaryCursor.init({
    lineSize: 0.015,
    sparklesCount:    30,
    opacityDecrement: 0.75,
  })
})

ReactDOM.render(
  <>
    <Router>
      <Route render={({location})=>(
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
              <Route path='/' exact component={Landing} />
              <Route path='/my-portfolio' component={ Dashboard } />
          </Switch>
        </AnimatePresence>
      )} />
    </Router>
  </>,
  document.getElementById('root')
)