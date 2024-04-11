import useAsync from '../../hooks/useAsync';
import { getCardFolderListRequest } from '../../apis/api';
import { useState } from 'react';

export default function ListPage() {
  const { requestFunction: getCardFolder } = useAsync(getCardFolderListRequest);
  const [list, setList] = useState();

  const getRequest = async () => {
    const result = await getCardFolder();
    if (!result) return;

    setList(result);
    console.log(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest();
  };

  return (
    <div>
      <button type="button" onClick={handleSubmit}>
        클릭
      </button>
    </div>
  );
}
