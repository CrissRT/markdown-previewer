import React from "react";


export default class GetInput extends React.Component {
    render() {
      return (
        <div id="editor-block" className="d-block text-white">
            <div id="editor-toolbar" className="d-flex p-1 mx-1 border border-black rounded-top">
            <i className="bi bi-pencil-fill px-1" />
                    Editor
                </div>
            <div id="editor-text" className="px-1">
                <textarea
                    id="editor"
                    value={this.props.input} 
                    onChange={this.props.handleChange}
                    className="text-black border border-black rounded-bottom"
                />           
            {/* <input value={this.props.input} onChange={this.props.handleChange}/> */}
            </div>
        </div>
      );
    }
  };