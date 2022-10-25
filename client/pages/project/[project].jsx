import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../../utils";
import { Project } from "../../components";
const viewProject = () => {
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
        <div class="flex items-center justify-center w-screen h-screen">
          <div class="px-4 lg:py-12">
            <div class="lg:gap-4 lg:flex">
              <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
                <h1 class="font-bold text-blue-600 text-9xl">
                  project not found
                </h1>
                <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                  <span class="text-red-500">Oops!</span> project not found
                </p>
                <p class="mb-8 text-center text-gray-500 md:text-lg">
                  The page you’re looking for doesn’t exist.
                </p>
                <a
                  href="/"
                  class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
                >
                  Go home
                </a>
              </div>
              <div class="mt-4">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg"
                  alt="img"
                  class="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default viewProject;
