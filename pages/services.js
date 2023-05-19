import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import { Flex, Box, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Container>
      <Head>
        <title>MM-Services</title>
      </Head>

      <Box justifyContent="center"  px="5rem" bg='red.200'>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue
          elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
          libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis
          diam.
        </Text>
      </Box>
    </Container>
  );
};
export default Services;
