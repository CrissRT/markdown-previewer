import React from "react";
import ReactMarkdown from 'react-markdown';

export default class RenderInput extends React.Component {
    render() {
      return (
        <div className="container-fluid text-white" id="preview-block">
            <div id="preview-toolbar" className="d-flex p-1 border border-black rounded-top">
                <i className="bi bi-eye-fill px-1" />
                Preview
            </div>
            <div id="preview" className="p-2 text-black border border-black rounded-bottom">
                <ReactMarkdown>{this.props.input}</ReactMarkdown>
            </div>
        </div>
      );
    }
  };