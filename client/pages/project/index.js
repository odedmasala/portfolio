import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect } from 'react';

const  FourOhFour = () => {
  useEffect(() => {
   router.replace("/404")
  }, []);
  const router = useRouter();
}
export default FourOhFour