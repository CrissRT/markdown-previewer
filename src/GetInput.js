import React from "react";


export default class GetInput extends React.Component {
    render() {
      return (
        <div id="editor-block" className="container-fluid text-white">
            <div id="editor-toolbar" className="d-flex p-1 border border-black rounded-top">
                <i className="bi bi-pencil-fill px-1" />
                    Editor
            </div>

            <textarea
                id="editor"
                value={this.props.input} 
                onChange={this.props.handleChange}
                className="text-black border border-black rounded-bottom p-2"
            />           
            {/* <input value={this.props.input} onChange={this.props.handleChange}/> */}
        </div>
      );
    }
  };