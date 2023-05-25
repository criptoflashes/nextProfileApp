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

        <Heading textAlign="center" w="100%">
          Thank you for visiting this web application! I would like to share
          with you how it was built and the technologies used...
        </Heading>
        <Box py="2rem">
          <Text fontSize="lg">

  
              It was developed using Next.js and React.js, powerful frameworks
              that enable us to create fast and dynamic user interfaces. Next.js
              provides server-side rendering, routing capabilities, and a smooth
              development experience. React.js allows us to build reusable
              components, making our code efficient and maintainable.
           

            <Text my="1rem">
              To fetch and display the user data, I utilized the RESTful API
              called https://reqres.in/. This API provides a convenient way to
              retrieve user information, which we then present in a clean and
              intuitive interface. You can explore each user in detail, gaining
              access to comprehensive information about them.
            </Text>
            <Text my="1rem">
              For the visual design and responsive layout, I incorporated Chakra
              UI, ensuring a modern and visually appealing experience for our
              users. Additionally, it allowed me to optimize the application's
              responsiveness, making it accessible on various devices, including
              mobile phones.
            </Text>
            <Text my="1rem">
              This web application was created with the intention of practicing
              and improving my skills using the mentioned tools. By leveraging
              Next.js, React.js, the Reqres.in API, and Chakra.UI, I challenged
              myself to gain hands-on experience in building a fully functional
              and visually appealing web app. Throughout the development
              process, I embraced the opportunity to deepen my knowledge of
              these technologies, refine my coding techniques, and explore best
              practices for creating efficient and user-friendly applications.
            </Text>
            <Box my="1rem">
              Once again, thank you for visiting this web app. If you have any
              feedback or suggestions, please feel free to reach out to me on 
              GitHub:
              <Link href={"https://github.com/criptoflashes"}>
                <Button> https://github.com/criptoflashes </Button>
              </Link>{' '}
              or LinkedIn:
              <Link href={"https://www.linkedin.com/in/m-g-maceira/"}>
                <Button>  https://www.linkedin.com/in/m-g-maceira/ </Button>
              </Link>
               I would
              love to hear from you.
            </Box>
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default About;
