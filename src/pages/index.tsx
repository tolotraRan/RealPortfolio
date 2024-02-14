import React from 'react';
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Who from "../components/Who";
import Skills from "../components/Skills";
import MainProjects from "../components/MainProjects";
import Contact from "../components/Contact";
import { GET_ALL_DATA } from "../graphql/queries";
import { allDataType } from "../shared/types";
import { client } from "../graphql/client";
import { GetStaticProps, NextPage } from "next";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <Cursor />
      <Navbar />
      <div>
        <Intro />
        <Who />
        <Skills skills={data.skills} />
        <MainProjects projects={data.projects} />
        <Contact />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(GET_ALL_DATA);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
