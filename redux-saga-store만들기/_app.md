# pages/_app.js

next 에서 App은 페이지의 초기내용을 설정할때 사용한다.

밑에처럼사용

* 레이아웃 잡을때
* state를 유지시킬때
* 추가적인 데이터를 넣을때
* 전역CSS를 적용할때

나는 주로 레이아웃 잡을때 사용한다.

# 사용법
```
pages/_app.js

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

props 중에서 Coponent는 현재 사용하는 page(page폴더안에있는)이다
pageProps는 페이지를 로드할때 미리 만들어진 데이터(data fetching method에 의한 [ex) getServerSideProps()])이다
그래서 <Component />에 {...pageProps}를 넣어주면 된다.
