import Router  from "next/router";
import { Text, Box, Flex, Spacer, Image, Stack } from "@chakra-ui/react";

const Users = (props) => {
  return (
    <Box  bg="red.200" >
      {props.users.map((u) => {
        return (
          <Stack direction={['column', 'row']} 
           
            key={u.id}
            justifyContent={"space-around"}
            bg="white"
            my="1rem"
            py='1rem'
            alignItems={"center"}
            onClick={e => Router.push ('/users/[id]', `/users/${u.id}`)}
          >
            <Box textAlign={"center"} px='1rem'>
              <Text >
                Name: {u.first_name} {u.last_name}
              </Text>
              <Text>Email: {u.email}</Text>
            </Box>

            <Image
              src={u.avatar}
              alt={u.first_name + u.last_name}
              borderRadius="full"
              boxSize="100px"
              mx='1rem'
            />
          </Stack>
        );
      })}
    </Box>
  );
};

export default Users;
