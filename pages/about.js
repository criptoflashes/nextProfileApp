import React from "react";
import Link from "next/link";
import Container from "../components/Container";
import Head from "next/head";
import {
  Flex,
  Box,
  Text,
  Heading,
  Stack,
  Highlight,
  Button,
} from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Container>
        <Head>
          <title>MM-About</title>
        </Head>

        <Heading textAlign="center" w="100%" py="3rem">
          Thank you for visiting this web application! I would like to share
          with you how it was built and the technologies used...
        </Heading>
        <Box py="3rem">

        <Text fontSize="2xl">About technologies involved</Text>
          <Text fontSize="lg" my="0.2rem">

  
          The web application was developed using Next.js to achieve server-side rendering, routing capabilities, and a seamless development experience. React.js was utilized to build reusable components, ensuring efficient and maintainable code.

            <Text my="1rem">
            To fetch and display user data, a RESTful API called https://reqres.in/ was employed. You can explore detailed information about each user, gaining comprehensive insights.
            </Text>
            <Text my="1rem">
            For visual design and responsive layout, Chakra UI was incorporated, providing a modern and visually appealing experience for users. Additionally, the web app offers the option to switch between dark and light modes. Furthermore, optimization efforts were made to ensure responsiveness across various devices, including mobile phones.
            </Text>

            <Text fontSize="2xl">Goal</Text>
            <Text my="0.2rem">
            
            The goal of this small web app was to provide a platform for practicing and enhancing skills using the aforementioned tools. By leveraging Next.js, React.js, the Reqres.in API, and Chakra.UI, the developer aimed to gain practical experience in building a fully functional and visually appealing web app. Throughout the development process, emphasis was placed on deepening knowledge in these technologies, refining coding techniques, and implementing best practices for efficient and user-friendly applications.
            </Text>
            <Box my="1rem">
            Thank you once again for visiting. If you have any feedback or suggestions, please feel free to reach out through 
              {' '}
              <Link href={"https://github.com/criptoflashes"}>
                <Button>Github</Button>
              </Link>{' '}
              or {' '}
              <Link href={"https://www.linkedin.com/in/m-g-maceira/"}>
                <Button> LinkedIn</Button>{', '}
              </Link>
              Your input is greatly appreciated!
            </Box>
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default About;
