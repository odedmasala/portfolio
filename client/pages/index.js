import Head from 'next/head'
import { About, Main, Skills} from '../components';

const Home = () => {
  return (
    <div className=' text-gray-800 bg-[#FCFBF4] dark:bg-darked font-Inter  dark:bg-darkedColor-0 dark:bg-auto dark:text-white'>
      <Head>
        <title>Oded-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Nunito:ital,wght@1,300&family=Press+Start+2P&family=Public+Sans:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/blue_circle.png" />
      </Head>
      <Main/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home;