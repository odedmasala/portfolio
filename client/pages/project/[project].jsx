import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../../utils";
import Link from "next/link";

import { Project } from "../../components";
import Image from "next/image";
const ViewProject = () => {
  const router = useRouter();
  const { project } = router.query;
  const [isExists, setIsExists] = useState(false);
  const CheckingWhetherItExists = projectsList.filter(
    (elem) => elem.proName == project
  );

  useEffect(() => {
    if (CheckingWhetherItExists[0] != undefined) {
      setIsExists(true);
    } else {
      setIsExists(false);
    }
  }, [CheckingWhetherItExists]);

  if (isExists) {
    return (
      <>
        <div>
          <Project proData={CheckingWhetherItExists[0]} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="px-4 lg:py-12">
            <div className="lg:gap-4 lg:flex">
              <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                <h1 className="font-bold text-blue-600 text-9xl">
                  project not found
                </h1>
                <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                  <span className="text-red-500">Oops!</span> project not found
                </p>
                <p classNameName="mb-8 text-center text-gray-500 md:text-lg">
                  The page you’re looking for doesn’t exist.
                </p>
                <Link
                  href="/"
                  className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                >
                  Go home
                </Link>
              </div>
              <div className="mt-4">
                <Image
                  width={"400px"}
                  height={"400px"}
                  src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                  alt="img"
                  layout="fill"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ViewProject;
