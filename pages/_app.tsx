import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page: any) => page);
    // return <
    //     Component {...pageProps}
    // />
    return getLayout(<Component {...pageProps}/>)
}

export default App