import { useEffect, useRef, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import Button from '../Button/Button';
import {
  deleteProfileImageRequest,
  uploadProfileImageRequest,
} from '../../apis/api';

export default function ImageUploader({ onChange, setSelected, initImage }) {
  const [fileItem, setFileItem] = useState();
  const [ref, setRef] = useState();
  const inputRef = useRef();
  const { requestFunction: getUrl } = useAsync(uploadProfileImageRequest);

  const handleImageChange = (e) => {
    setFileItem(e.target.files[0]);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    setFileItem(null);
  };

  useEffect(() => {
    if (!fileItem) return;
    const urlRequest = async () => {
      const result = await getUrl(fileItem);
      if (!result) return;
      console.log(result);
      onChange(result.getUrl);
      setSelected(result.getUrl);
      setRef(result.delete);
    };
    urlRequest();

    return () => {
      setSelected(initImage);
      deleteProfileImageRequest(ref);
    };
  }, [fileItem]);

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={inputRef}
      />
      {fileItem && (
        <button type='button' onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}
