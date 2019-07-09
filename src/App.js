import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import Timer from './components/Timer';
import TodoApp from './components/TodoApp';
import MarkdownEditor from './components/MarkdownEditor'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.onCounterUpdate = this.onCounterUpdate.bind(this)
    this.initValues = [0, 10, 20]
    const totalValue = this.initValues.reduce((prev, current) => prev + current, 0)
    this.state = {
      totalValue: totalValue
    }
  }
  
  onCounterUpdate(previousValue, newValue) {
    const valueChange = newValue - previousValue
    this.setState({
      totalValue: this.state.totalValue + valueChange
    })
  }

  render() {
    return (
      <div className="App">
        <MarkdownEditor></MarkdownEditor>
        <TodoApp></TodoApp>
        <ClickCounter 
          Caption='First' 
          initValue={this.initValues[0]} 
          onUpdate={this.onCounterUpdate}
        />
        <ClickCounter 
          Caption='Second' 
          initValue={this.initValues[1]} 
          onUpdate={this.onCounterUpdate}
        />
        <ClickCounter 
          Caption='Third' 
          initValue={this.initValues[2]} 
          onUpdate={this.onCounterUpdate}
        />
        <hr/>
        <div>
          Total: { this.state.totalValue }
        </div>
        <Timer/>
      </div>
    );
  }
}

export default App;
