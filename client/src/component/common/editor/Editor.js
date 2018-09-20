import ReactQuill from 'react-quill'; // ES6
import React from "react";
import 'react-quill/dist/quill.snow.css'; // ES6
import PropTypes from "prop-types";
import "./Editor.less"

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editorHtml: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(html) {
        this.setState({editorHtml: html});
        this.props.handleEditorChange(html)
    }


    render() {
        return (
            <div className="editor-container">
                <ReactQuill
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
    toolbar: [
        [{ 'color': [] }, { 'background': [] }],
        [{'header': '1'}, {'header': '2'}, {'font': []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = ['color','background',
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

/*
 * PropType validation
 */
Editor.propTypes = {
    placeholder: PropTypes.string,
}
export default Editor;