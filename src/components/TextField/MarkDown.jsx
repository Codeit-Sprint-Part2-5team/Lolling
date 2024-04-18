import MDEditor from '@uiw/react-md-editor';

function MarkDown({ textareaBody, setTextareaBody }) {
  return (
    <div className='MDLayout' style={{ width: '100%', height: '260px' }}>
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
