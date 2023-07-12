import React from "react";
import ReactMarkdown from 'react-markdown';

export default class RenderInput extends React.Component {
    render() {
      return (
        <div className="d-block text-white" id="preview-block">
            <div id="preview-toolbar" className="d-flex p-1 border border-black">
                <i className="bi bi-eye-fill px-1" />
                Preview
            </div>
            <div id="preview" className="px-2 text-black border border-black">
                <ReactMarkdown>{this.props.input}</ReactMarkdown>
            </div>
        </div>
      );
    }
  };