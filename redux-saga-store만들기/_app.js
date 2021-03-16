import React from 'react';
import {wrapper} from "../store"
import Head from "next/Head"

const MyApp = ({Component,pageProps}) => {

    return (
        <>  
            <Head>
                <title>all || foxboxr</title>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default wrapper.withRedux(MyApp);