
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter,
  Routes,
  Route

} from "react-router-dom";





export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  
  setProgress=(progress)=>{
    this.setState({progress: progress})
  
  }



  render() {
    
    return (
      
      <div>
        <HashRouter basename='/'>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       />



      
          <Routes>
          <Route exact path="/" element ={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general1" pageSize={this.pageSize} county="in" category="general"/>}>
          </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}      apiKey={this.apiKey}       key="business" pageSize={this.pageSize} county="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}      key="entertainment" pageSize={this.pageSize} county="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}       apiKey={this.apiKey}    key="general" pageSize={this.pageSize} county="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress}          apiKey={this.apiKey}    key="health"   pageSize={this.pageSize} county="in" category="health"/>}></Route>
          <Route exact path="/science"element={ <News setProgress={this.setProgress}       apiKey={this.apiKey}   key="science" pageSize={this.pageSize} county="in" category="science"/>}></Route>
          <Route exact path="/sports" element={ <News setProgress={this.setProgress}       apiKey={this.apiKey}  key="sports"        pageSize={this.pageSize} county="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}    apiKey={this.apiKey} key="technology"     pageSize={this.pageSize} county="in" category="technology"/>}></Route>


        </Routes>
        
        </HashRouter>
      </div>
      
    )
  }
}

