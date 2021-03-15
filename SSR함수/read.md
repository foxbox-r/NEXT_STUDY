내가 문서를 봤을때 ssr 함수는 getInitialProps였는데 이제는 쓰지않는다고 한다.

대신에 나온 함수가 3개가 있는데, getServerSideProps,getStaticProps,getStaticPaths 가 있다. 근데 내가 봤을땐 getServerSideProps,getStaticProps만 알아도 될것같아서 두개만 정리 했다.

## getStaticProps
getStaticProps는 최초 빌드시간때(맨 처음 로드할때) 정적인 파일로 만들고, 그 다음 로드때부터 계속 그 파일을 사용하여 로드시간을 줄인다. 사용하면 좋은 상황 EX) 소개페이지, 데이터가 잘 변하지 않는 페이지 등..

```
pages/Info.js

function Info({ data }) {
  
  return (
      <>
        <h1>{data}</h1>
      </>
  )
}

export async function getStaticProps() {
    const data = "This is Info site."
  return { 
      props: { data } 
    }
}

```

## getServerSideProps
getServerSideProps는 콤포넌트가 렌더링되기전에 데이터를 불러올수있어서 기본리액트보다 빠르고,자연스러운 느낌을 줄수있다. 사용하면 좋은상황
EX) 로그인유무검사,게시글 먼저 가져오기 등..

```
// pages/user/[id].js

const User = ({user}) => {
    return (
        <>
            <h1>{user.name}<h1>
        </>
    )
}

export async function getServerSideProps(ctx){ //   다이나믹 라우팅은 ctx객체에 params이라는 키가 들어 있음

    const id = ctx.params.id;

    const user = await axios.get(`backhost:80/user/${id}`);

    return {
        props:{
            user
        }
    }
}
```