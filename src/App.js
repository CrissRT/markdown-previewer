import './App.css';
import RenderInput from './RenderInput';
import GetInput from './GetInput';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

const firstStart = `# Heading 1
## Subheading 2
[Link Text](https://www.example.com)
\`Inline Code\`
\`\`\`
Code Block
\`\`\`
- List Item
> Blockquote
![Image Alt Text](https://www.example.com/image.jpg)
**Bolded Text**`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: firstStart
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
        <h1 className="h1 text-center mb-5">Markdown Previewer</h1>
        <div className="d-flex justify-content-around" id='markdown-block'>
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
        </div>
      </>

    );
  }
};


// <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
// <RenderInput input={this.state.inputValue}/>
