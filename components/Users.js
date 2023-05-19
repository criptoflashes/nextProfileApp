import { Text, Box, Flex } from "@chakra-ui/react"
import { wrap } from "framer-motion";




const Users = (props) =>{
    return (
        <Flex  direction="column" minWidth='max-content' alignItems='center' >
          {props.users.map((u) => {
            return (
              <Box py='2'>
              <Text>
                {u.name}
              </Text>
              </Box>
            );
          })}
        </Flex>
      );
    };

export default Users