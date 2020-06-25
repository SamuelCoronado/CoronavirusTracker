import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar';
import {Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Landing from './components/layout/Landing'
import MathExam from './components/MathExam';
import ExamResults from './components/ExamResults'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Navbar/>
            <Route exact path="/mathExam" component={MathExam} />
            <Route exact path="/results" component={ExamResults} />
            <Route exact path="/" component={Landing} />
      </Router>
 </Provider>
  );
}

export default App;
