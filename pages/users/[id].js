import { useRouter } from "next/router";
import _fetch from "isomorphic-fetch";
import Container from "../../components/Container";
import { Text, Box, Flex, Spacer, Image,   Heading,
    Avatar, 
    Center,
    Stack,
    Button,
    useColorModeValue, } from "@chakra-ui/react";

const User = ({ user }) => {
  console.log(user);
  const router = useRouter();
  const { id } = router.query; //me devuelve un objeto del que tomaré solo el id
  /* console.log(id) */

const num= Math.random()*100000
const followersNum = Math.floor(num /10)

  return (
    <Container>
{/*       <Flex direction={"column"} alignItems={"center"} bg="blue.100" my='5rem'>
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
      </Flex> */}


      <Center py={16}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-14}>
          <Avatar
          src={user.avatar}
          alt={user.first_name + user.last_name}
          borderRadius="full"
          size="xl"
          objectFit="cover"
          my="1rem"
        
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={5}>
          <Stack spacing={0} align={'center'} mb={3}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {user.first_name} {user.last_name}
            </Heading>
            <Text color={'gray.500'}>{user.email}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
{/*             <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                email
              </Text>
            </Stack> */}
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Center>
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
