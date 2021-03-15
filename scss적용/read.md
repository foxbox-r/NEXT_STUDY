Next.js 에서 scss를 사용하려면 next-sass 플러그인을 추가로 설치해야 한다. next-sass 플러그인을 설치하고 사용하는 방법은 다음과 같다.
```
npm install --save @zeit/next-sass node-sass
```

프로젝트 루트 경로에 next.config.js 파일 생성
```
// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.exports = withSass(
  {cssModules: true} // css도 적용
);

```