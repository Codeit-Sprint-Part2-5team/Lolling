import useAsync from '../../hooks/useAsync';
import {
  getCardFolderListRequest,
  getMessageListRequest,
  createCardFolderRequest,
  createMessageRequest,
  deleteMessageRequest,
  deleteCardFolderRequest,
} from '../../apis/api';
import { useState } from 'react';
import * as S from './ApiTestPage.styled';

const INIT_CREATE_ROLL_PAPER = {
  userName: '',
  backgroundColor: '',
};

const INIT_MESSAGE_BODY = {
  recipientId: '',
  sender: '',
  profileImageURL: '',
  relationship: '',
  content: '',
  font: '',
};

const PostPage = () => {
  const [rollPaperBody, setRollPaperBody] = useState(INIT_CREATE_ROLL_PAPER);
  const { requestFunction: createRequest } = useAsync(createCardFolderRequest);

  const onChangeInputHandler = (e) => {
    setRollPaperBody({
      ...rollPaperBody,
      [e.target['name']]: e.target.value,
    });
  };

  const createPaper = async (e) => {
    e.preventDefault();
    const result = await createRequest(rollPaperBody);
    if (!result) return;

    setRollPaperBody(INIT_CREATE_ROLL_PAPER);
  };

  return (
    <S.TestLayout>
      <form onSubmit={createPaper}>
        <h4>롤링 페이퍼 생성하기</h4>
        <input
          name='userName'
          value={rollPaperBody.userName}
          onChange={onChangeInputHandler}
          placeholder='페이퍼 주인이 될 사람 이름을 입력해주세요'
        />
        {/* <h4>배경화면을 선택해 주세요.</h4>
        <p>컬러를 선택하거나 이미지를 선택할 수 있습니다.</p>
        <div>
          <button type="button">컬러</button>
          <button type="button">이미지</button>
        </div> */}
        <select
          name='backgroundColor'
          value={rollPaperBody.backgroundColor}
          onChange={onChangeInputHandler}
        >
          <option value='' disabled hidden>
            선택하세요
          </option>
          <option value='beige'>주황</option>
          <option value='purple'>보라</option>
          <option value='blue'>파랑</option>
          <option value='green'>초록</option>
        </select>
        <S.Button>생성하기</S.Button>
      </form>
    </S.TestLayout>
  );
};

const GetPaper = () => {
  const [paperList, setPaperList] = useState();
  const { requestFunction: getCardFolder } = useAsync(getCardFolderListRequest);

  const getRequest = async () => {
    const res = await getCardFolder();
    if (!res) return;
    const {
      data: { results },
    } = res;
    setPaperList(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest();
  };
  return (
    <S.TestLayout>
      <form>
        <h4>롤링 페이퍼 가져오기</h4>
        <S.Button type='button' onClick={handleSubmit}>
          등록된 유저 출력
        </S.Button>
      </form>
      {paperList
        ? paperList.map((user) => (
            <div
              key={user.id}
            >{`${user.name}(id:${user.id}, 배경색:${user.backgroundColor}, 등록된 페이퍼:${user.messageCount})`}</div>
          ))
        : null}
    </S.TestLayout>
  );
};

const PostMessages = () => {
  const [messageBody, setMessageBody] = useState(INIT_MESSAGE_BODY);
  const { requestFunction: createRequest } = useAsync(createMessageRequest);

  const onChangeInputHandler = (e) => {
    setMessageBody({
      ...messageBody,
      [e.target['name']]: e.target.value,
    });
  };

  const createMessage = async (e) => {
    e.preventDefault();
    const result = await createRequest(messageBody);
    if (!result) return;

    setMessageBody(INIT_MESSAGE_BODY);
  };

  return (
    <S.TestLayout>
      <form onSubmit={createMessage}>
        <h4>유저에게 메시지 보내기</h4>
        <input
          value={messageBody.recipientId}
          name='recipientId'
          placeholder='id'
          onChange={onChangeInputHandler}
        />
        <input
          value={messageBody.sender}
          name='sender'
          placeholder='보내는 사람'
          onChange={onChangeInputHandler}
        />
        <input
          value={messageBody.profileImageURL}
          name='profileImageURL'
          placeholder='프로필 이미지'
          onChange={onChangeInputHandler}
        />
        <select
          value={messageBody.relationship}
          name='relationship'
          onChange={onChangeInputHandler}
        >
          {' '}
          <option value='' disabled hidden>
            선택하세요
          </option>
          <option value='친구'>친구</option>
          <option value='지인'>지인</option>
          <option value='동료'>동료</option>
          <option value='가족'>가족</option>
        </select>
        <textarea
          value={messageBody.content}
          name='content'
          placeholder='내용'
          onChange={onChangeInputHandler}
        />
        <select
          value={messageBody.font}
          name='font'
          onChange={onChangeInputHandler}
        >
          <option value='' disabled hidden>
            선택하세요
          </option>
          <option value='Noto Sans'>Noto Sans</option>
          <option value='Pretendard'>Pretendard</option>
          <option value='나눔명조'>나눔명조</option>
          <option value='나눔손글씨 손편지체'>나눔손글씨 손편지체</option>
        </select>
        <S.Button type='submit'>보내기</S.Button>
      </form>
    </S.TestLayout>
  );
};

const GetMessage = () => {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState();
  const { requestFunction: getMessages } = useAsync(getMessageListRequest);

  const getRequest = async (id) => {
    const res = await getMessages(id);
    console.log(res);
    if (!res) return;

    const {
      data: { results },
    } = res;
    console.log(results);
    setMessages(results);
  };

  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRequest(id);
  };

  return (
    <S.TestLayout>
      <form onSubmit={handleSubmit}>
        <h4>유저가 받은 메세지 조회</h4>
        <input onChange={handleInput} placeholder='id를 입력하세요' />
        <S.Button>조회</S.Button>
        {messages.map((message) => (
          <div key={message.id}>
            <div>{`id:${message.id}, 보낸사람:${message.sender}, 내용:${message.content}`}</div>
            <img src={message.profileImageURL} width='50px' />
          </div>
        ))}
      </form>
    </S.TestLayout>
  );
};

const DeleteMessage = () => {
  const [id, setId] = useState();
  const { requestFunction: deleteMessage } = useAsync(deleteMessageRequest);

  const deleteRequest = async (id) => {
    const result = await deleteMessage(id);
    if (!result) return;

    setId();
  };
  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteRequest(id);
  };

  return (
    <S.TestLayout>
      <form onSubmit={handleSubmit}>
        <h4>메시지 삭제</h4>
        <input
          onChange={handleInput}
          placeholder='삭제할 메시지의 id를 입력하시오'
        />
        <S.Button>삭제</S.Button>
      </form>
    </S.TestLayout>
  );
};

const DeleteCardFolder = () => {
  const [id, setId] = useState();
  const { requestFunction: deleteMessage } = useAsync(deleteCardFolderRequest);

  const deleteRequest = async (id) => {
    const result = await deleteMessage(id);
    if (!result) return;

    setId();
  };
  const handleInput = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteRequest(id);
  };

  return (
    <S.TestLayout>
      <form onSubmit={handleSubmit}>
        <h4>롤링페이퍼 삭제</h4>
        <input
          onChange={handleInput}
          placeholder='삭제할 롤링페이퍼의 id를 입력하시오'
        />
        <S.Button>삭제</S.Button>
      </form>
    </S.TestLayout>
  );
};

const ApiTestPage = () => {
  return (
    <S.Layout>
      <h4>셀렉트 태그는 onChange라 값을 한번 변경해야 값이 들어감!</h4>
      <PostPage />
      <GetPaper />
      <PostMessages />
      <GetMessage />
      <DeleteMessage />
      <DeleteCardFolder />
    </S.Layout>
  );
};

export default ApiTestPage;
