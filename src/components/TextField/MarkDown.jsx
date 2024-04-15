import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

function MarkDown({ textareaBody, setTextareaBody }) {
  const [mdinfo, setMD] = useState('I am your reach text editor.');

  return (
    <div className='MDLayout' style={{ width: '720px', height: '260px' }}>
      <div className='markarea'>
        <div data-color-mode='light'>
          <MDEditor
            value={textareaBody}
            height={260}
            onChange={setTextareaBody}
          />
        </div>
      </div>
    </div>
  );
}

export default MarkDown;
