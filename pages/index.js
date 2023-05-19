
import Container from "../components/Container";
import React from "react";
import Head from "next/head";
import Users from '../components/Users'
import fetch from 'isomorphic-fetch';
import { Flex } from "@chakra-ui/react";

const Index = (props) => {
  /* console.log(props.users[7].name) */
  return (
    <Container>
      <Head>
        <title>MM-Home</title>
      </Head>

      <h1>Index</h1>
      <Users users={props.users}/>
    </Container>
  );
;
  }

Index.getInitialProps  = async (ctx) => {
const res = await fetch('https://jsonplaceholder.typicode.com/users?10')
const data = await res.json()
console.log(data)
return {users: data}
}

export default Index;
