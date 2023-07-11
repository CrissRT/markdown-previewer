import './App.css';
import RenderInput from './RenderInput';
import GetInput from './GetInput';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <>
        <h1 className="h1 text-center mt-5 mb-5">Markdown Previewer</h1>
        <div className="d-flex justify-content-around">
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
        </div>
      </>

    );
  }
};


// <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
// <RenderInput input={this.state.inputValue}/>
