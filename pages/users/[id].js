import { useRouter } from "next/router";
import _fetch from "isomorphic-fetch";
import Container from "../../components/Container";
import { Text, Box, Flex, Spacer, Image } from "@chakra-ui/react";

const User = ({ user }) => {
  console.log(user);
  const router = useRouter();
  const { id } = router.query; //me devuelve un objeto del que tomaré solo el id
  /* console.log(id) */
  return (
    <Container>
      <Flex direction={"column"} alignItems={"center"} bg="blue.100" my='5rem'>
        <Box bg="orange.100">
          <Image
            src={user.avatar}
            alt={user.first_name + user.last_name}
            borderRadius="full"
            boxSize="140px"
            objectFit="cover"
            my="2rem"
          />
        </Box>
        <Box bg="pink.100" my="1rem">
          <Text my="1rem" textAlign={'center'}>
            Name: {user.first_name} {user.last_name}
          </Text>
          <Text>Email: {user.email}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  console.log(ctx.query.id);
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  return { user: resJSON.data };
};

export default User;
