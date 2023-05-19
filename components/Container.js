import Head from "next/head";
import Navigation from "./Navigation";
import { Flex, Box, Text } from "@chakra-ui/react";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>MM portfolio</title>
      </Head>

      <Navigation />
      <Flex
        height="100vh"
       /*  alignItems="center" */
        justifyContent={"center"}
        bg="gray.200"
      >
        <div>{props.children}</div>
      </Flex>
    </div>
  );
};

export default Container;
