import { Button, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const ToggleColorMode = () => {
const{colorMode, toggleColorMode  } = useColorMode()

    return(
  <Box>
        <Button onClick = { () => toggleColorMode() }>
            {colorMode === 'dark'? <SunIcon/> : <MoonIcon/>}
            </Button>
{/*             <Box  bg={useColorModeValue('white', 'gray.800')} >
                <Text>Change</Text>
            </Box> */}
            </Box>
    )
}
export default ToggleColorMode