import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { projectsList } from "../../utils";
import { Project } from "../../components";
const viewProject = () => {
  const router = useRouter();
  const { project } = router.query;
  const CheckingWhetherItExists = projectsList.filter((elem) => elem.proName == project)
  useEffect(() => {
    console.log(CheckingWhetherItExists);
    console.log(project);
    // console.log(CheckingWhetherItExists);
    // if (CheckingWhetherItExists) router.replace("/404");
  }, []);
  return (
    <>
      <div>
        <Project proData={CheckingWhetherItExists[0]} />
      </div>
    </>
  );
};

export default viewProject;
