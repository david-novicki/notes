import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";

export default class BodyEditor extends Component {
  constructor() {
    super();
    this.setDomEditorRef = ref => (this.domEditor = ref);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.domEditor.focus();
  }
  render() {
    const { name, value = EditorState.createEmpty(), onChange } = this.props;

    return (
      <div className="h-100 w-100 mt-3" onClick={this.onFocus}>
        <Editor editorState={value} onChange={value => onChange({ target: { name, value } })} ref={this.setDomEditorRef} />
      </div>
    );
  }
}
