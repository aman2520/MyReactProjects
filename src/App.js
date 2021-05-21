import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

import { Component } from 'react';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form1 from './components/Form1';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

class App extends Component{
  render(){
    return (
      <div className="App">
        <FRParentInput/>
        {/* <LifeCycleA/> */}
        {/* <Form1/> */}
        {/* <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick/>
        <Counter/> */}
        {/* <Message></Message> */}
          {/* <Greet  name="Aman" heroName="QWERTY">Aman is a rockstar</Greet>
          <Greet  name="Aman1" heroName="ASDFG">
            <button>Action</button>
          </Greet>
          <Greet  name="Aman2" heroName="ZXCVB"></Greet>
          <Welcome name="Aman" heroName="QWERTY"/>
          <Welcome name="Aman1" heroName="ASDFG"/>
          <Welcome name="Aman2" heroName="ZXCVB"/> */}
      </div>
    );
  }
}

export default App;
