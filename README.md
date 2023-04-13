### 4월 원티드 프리온보딩 사전과제를 위한 git repository 입니다.

## 실행 방법

git clone 후, 'npm install'를 수행해 주세요.

리액트를 제외한 라이브러리는 react-router-dom 만 사용했으며,
dependencies에 명시되어 있지만 axios는 사용하지 않았습니다.

'npm run start' 또는 'npm start'를 통해
http://localhost:3000에서 프로젝트를 실행할 수 있습니다.

회원가입을 먼저 수행해야 하며,
회원가입이 성공적으로 수행되면 로그인 페이지로 다시 돌아옵니다.
(회원가입 시, '@' 이전 문자열에 숫자가 없을 경우
회원가입이 제대로 수행되지 않을 수 있습니다.)

회원가입에 작성한 이메일과 비밀번호를 통해 로그인을 진행할 수 있으며,
로그인이 성공하면 localstorage에 jwt 토큰이 저장되면서 투두 페이지로 이동합니다.

만약 의도적으로 url을 변경할 경우,
localstorage에 저장된 토큰의 유무에 따라서 로그인 페이지 또는 투두 페이지가 제한될 것입니다.

## 배포 사이트

https://wanted-pre-onboarding-frontend-jnsia.netlify.app/

'npm run build'를 수행하여 생성된 build 폴더를 netlify를 통해 배포하였습니다. 접속하여 결과물을 확인할 수 있습니다.

## 데모 영상

![wanted](https://user-images.githubusercontent.com/108898787/231901009-bf5f7b87-70c8-4052-b845-9b24564e3023.gif)

기본적인 흐름만 영상으로 담았으며,
의도적인 url 변경과 로그인 후 localstroage 확인을 원하신다면
위의 배포 사이트 링크를 통해 직접 확인하실 수 있습니다.
