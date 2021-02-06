import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LegendaryCursor from "legendary-cursor";
import { AnimatePresence } from 'framer-motion';
import Dashboard from './pages/dashboard/dashboard';

// lineSize:         0.15,
// opacityDecrement: 0.55,
// speedExpFactor:   0.8,
// lineExpFactor:    0.6,
// sparklesCount:    65,
// maxOpacity:       0.99,

window.addEventListener('load', () => {
  LegendaryCursor.init({
    lineSize: 0.03,
    sparklesCount:    10,
    opacityDecrement: 0.65,
    speedExpFactor:   0.55,
    lineExpFactor:'1',
    texture1: 'https://images.pexels.com/photos/1317559/pexels-photo-1317559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

  })
})

ReactDOM.render(
  <>
    <Router>
      <Route render={({location})=>(
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
              <Route path='/' component={ Dashboard } />
          </Switch>
        </AnimatePresence>
      )} />
    </Router>
  </>,
  document.getElementById('root')
)