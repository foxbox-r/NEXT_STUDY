 # wrapper, createWrapper 란?

 createWrapper의 역할은 기존 getServerSideProps, getStaticProps같은 next의 라이프사이클에 redux를 결합시키는 역할을 한다고 보시면 됩니다. 그래서 wrapper.withRedux로 페이지를 감싸게 되면 redux가 결합된 라이프사이클을 사용할 수 있게 됩니다.

