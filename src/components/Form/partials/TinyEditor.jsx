import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';
function TinyEditor({ skin, content_css, editorRef, initialValue }) {
  return (
    <Editor
      onInit={(_, editor) => {
        editorRef.current = editor;
      }}
      initialValue={initialValue}
      init={{
        selector: '#tinymce',
        skin,
        content_css,
        height: 500,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'preview',
          'help',
          'wordcount',
        ],
        toolbar:
          'undo redo | blocks | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style:
          'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
      }}
    />
  );
}

TinyEditor.propTypes = {
  skin: PropTypes.string.isRequired,
  content_css: PropTypes.string.isRequired,
  editorRef: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
};

export default TinyEditor;
