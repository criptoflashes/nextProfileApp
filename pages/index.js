
import Container from "../components/Container";
import React from "react";
import Head from "next/head";
import Users from '../components/Users'
import fetch from 'isomorphic-fetch';
import { Flex } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import ToggleColorMode from '../components/ToggleColorMode'
const Index = (props) => {
  /* console.log(props.users[7].name) */
  return (
    <Container>
      <Head>
        <title>MM-Home</title>
      </Head>
      <Users users={props.users}/>
     
    </Container>
  );
;
  }

Index.getInitialProps  = async (ctx) => {
const res = await fetch('https://reqres.in/api/users')
const resJSON = await res.json()
console.log(res)
return {users: resJSON.data}
}

export default Index;
