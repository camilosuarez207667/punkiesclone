import Navigation from "./Navigation"
import Head from "next/head"

const Container = (props: any) => (
    <div>
        <Head>
            <title>NEXTJ Container</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <div>
            {props.children}
        </div>
    </div>
)

export default Container
