import Router from "next/router";
import {
  Text,
  Box,
  Flex,
  Spacer,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation } from "@codechem/chakra-ui-animations";

const Users = (props) => {
  const animation = useAnimation("pulse", { duration: 500, iterationCount: 1 });

  return (
    <Box bg="red.200">
      {props.users.map((u) => {
        return (
          <Stack
            direction={["column", "row"]}
            key={u.id}
            justifyContent={"space-around"}
            bg={useColorModeValue("white", "gray.800")}
            my="1rem"
            py="2rem"
            alignItems={"center"}
            boxShadow={'2xl'}
            _hover={{
                cursor: 'pointer',
              animation: animation,
            }}
            onClick={(e) => Router.push("/users/[id]", `/users/${u.id}`)}
          >
            <Box textAlign={"center"} px="1rem">
              <Text>
                Name: {u.first_name} {u.last_name}
              </Text>
              <Text>Email: {u.email}</Text>
            </Box>

            <Image
              src={u.avatar}
              alt={u.first_name + u.last_name}
              borderRadius="full"
              boxSize="100px"
              mx="1rem"
            />
          </Stack>
        );
      })}
    </Box>
  );
};

export default Users;
