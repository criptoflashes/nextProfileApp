import Head from "next/head";
import Navigation from "./Navigation";
import { Flex, Box, Text, useColorModeValue} from "@chakra-ui/react";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>MM portfolio</title>
      </Head>

      <Navigation />
      <Flex vW="100vW"  vH= '100vH' justifyContent={"center"} bg={useColorModeValue('white', 'gray.800')}>
        <Box w={['80vW', '80vW', '50vW']} >{props.children}</Box>
      </Flex>
    </div>
  );
};

export default Container;
