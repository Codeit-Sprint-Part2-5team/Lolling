<img width="9160" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/68220e8a-68ea-4961-8106-806d55c33636">  
<br />

- 배포 URL : https://5rolling.netlify.app/
- 개발 기간 : 2024.4.9 - 2024.4.24


## 프로젝트 소개

  - 추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼인 '롤링' 서비스입니다.
  - 모든 롤링페이퍼를 한 눈에 확인할 수 있습니다.
  - 본인의 롤링페이퍼 페이지도 생성해보고, 다른 사람의 페이지에 롤링페이퍼도 작성해 보세요.


## 팀원 구성

|박준영|이보미|이진욱|정성혜|오다은|
|:---:|:---:|:---:|:---:|:---:|
|<img src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/58012212-d77b-4e4e-ad06-8e5bada646b6" width="100" alt="박준영" />|<img src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/e6fce7e8-820c-4e96-8434-8c43a565ba29" width="100" alt="이보미" />|<img src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/790302e8-55b9-48ae-93f2-8f5bed2584b5" width="100" alt="이진욱" />|<img src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/5984c657-ddc6-4971-8d61-e66d8a8589a5" width="100" alt="정성혜" />|<img src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/41a83c4c-5ccd-48b4-a3a8-7dcc1939360c" width="100" alt="오다은" />|
|<a href="https://github.com/JunYoungee">JunYoungee</a>|<a href="https://github.com/Leebomi98">Leebomi98</a>|<a href="https://github.com/kidboi666">kidboi666</a>|<a href="https://github.com/eqypo9">eqypo9</a>|<a href="https://github.com/O-daeun">O-daeun</a>|


## 개발 환경

### 1. 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white">

### 2. 협업 툴
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

### 3. 서비스 배포 환경
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

### 4. 디자인 시안
<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### 5. 코드 컨벤션
<a href="https://github.com/Codeit-Sprint-Part2-5team/Rolling/wiki/%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98">코드 컨벤션</a>

### 6. 커밋 컨벤션
<a href="https://github.com/Codeit-Sprint-Part2-5team/Rolling/wiki/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98">커밋 컨벤션</a>

## 프로젝트 구조

## 역할 분담

⭐ 오다은
  - UI
    - 페이지 : Rolling 페이지, NotFound 페이지
    - 공통 컴포넌트 : 롤링페이퍼 카드, 헤더
  - 기능
    - 무한 스크롤, 롤링페이퍼 페이지 삭제, 롤링페이퍼 카드 삭제, 모달창 띄우기, 카카오톡 공유하기
   
⭐ 이보미
  - UI
    - 페이지 : Home 페이지
    - 공통 컴포넌트 : 롤링 페이퍼 상세 모달, 토스트 팝업, 관계 뱃지
  - 기능
    - 버튼 클릭시 페이지 이동

🏀 정성혜
- UI
  - 페이지 : List 페이지
  - 공통 컴포넌트 : 드롭다운, 인풋창, 텍스트 에디터
- 기능
    - 카드 슬라이드 좌우 스크롤, 카드 좌측부터 채우기, 카드 4개 초과부터 좌측 버튼 생성, 버튼 클릭시 카드 목록 한 페이지씩 불러오기, 불러올 카드 데이터 없을시 버튼 없애기, 카드 인기순&최신순으로 배열

## 페이지별 기능

🏠 Home 페이지

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/9b050dc8-c81b-44a0-a686-c47ebd16ddb6">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/b93a28e3-664a-4f16-a808-9d47abb248b0">|
|---|---|


🗂️ List 페이지

- 카드 목록은 규격에 따라 좌우 스크롤과 버튼으로 넘길 수 있습니다.
- 카드는 좌측부터 채워지며 4개 초과시 우측 버튼이 생성되어 다음 페이지로 넘어갈 수 있습니다.
- 더이상 불러올 카드 데이터가 없으면 우측 버튼은 사라집니다.
- 카드는 인기순과 최신순으로 배열되어 있습니다.

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/aa6c36d2-cd6d-4481-9031-cae2fb594d8e">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/98b911e8-2925-41e3-aab0-1b46e5f5d108">|
|---|---|


✉️ RollingPaper 페이지

- 카드 목록은 무한 스크롤 방식으로 보여집니다.
- 카드를 누르면 해당 카드가 확대되어 보여집니다.
- 카카오톡으로 공유하거나 URL을 복사할 수 있습니다.
- 이모지를 추가할 수 있습니다.

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/e7330558-1b8d-413a-b70a-03f2329ab9ce">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/94ef647a-5654-46f6-8d0b-243df5b65ed6">|
|---|---|

- /edit 경로로 이동하면 롤링페이퍼를 삭제할 수 있습니다.
  
|<img width="650" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/b50d5043-f156-437e-a91e-1306a9c3712a">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/35c8e606-fff9-4562-aed6-d14b5b450003">|
|---|---|


📫 Post 페이지

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/7085a106-e798-4520-8941-8b1fe89bdc68">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/f393ffde-d69b-45fe-bb6c-e7f619c57961">|
|---|---|


✍️ Message 페이지

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/6c25011d-fecb-458b-9db2-59ca90985633">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/56592f90-ae95-427d-bc03-92e533ed3174">|
|---|---|


❌ NotFound 페이지

- 잘못된 주소로 접근할 경우 NotFound 페이지가 보여집니다.

|<img width="1120" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/ee46e1c6-37a2-4946-93f9-8b6927902ac9">|<img width="320" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/a02cce9a-f11d-446c-b149-426b731bbf40">|
|---|---|

## 기타 기능

⌛ 로딩중 아이콘

- API 호출 시 pending 상태일 때 로딩중 아이콘이 회전하며 보여집니다.

|<img width="400" alt="image" src="https://github.com/Codeit-Sprint-Part2-5team/Rolling/assets/105799083/5f7e3f5f-2e2e-4e2d-98f9-df58f8d26306">|
|---|



## 트러블 슈팅
- <a href="https://github.com/Codeit-Sprint-Part2-5team/Rolling/wiki/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_cardslider-%EC%97%90%EB%9F%AC-%EC%9D%B4%EC%8A%88#cardslider-%EC%97%90%EB%9F%AC-%EC%9D%B4%EC%8A%88">cardslider 트러블 슈팅</a>


## 개선 사항


