import React from "react";
import Container from "../components/Container";
import Head from 'next/head';
import { Flex, Box, Text } from "@chakra-ui/react";


const About = () => {
  return (
    <div>
      <Container>
       <Head>
        <title>MM-About</title>
        
      </Head>
      <Text>About</Text>
      </Container>
      
    </div>
  );
};

export default About;
