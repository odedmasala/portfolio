import { Navbar } from "../components";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>

        <div className={darkMode ? "dark w-full" : "w-full"}>
          <div className="text-gray-800 bg-[#FCFBF4] dark:bg-darked font-Inter  dark:bg-darkedColor-0 dark:bg-auto dark:text-white">
          {router.pathname != "/404" && <Navbar dark={setDarkMode} />}
          <Component {...pageProps} />
        </div>
          </div>
    </>
  );
}

export default MyApp;
