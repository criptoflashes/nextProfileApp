import {ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript} from "@chakra-ui/color-mode"
import theme from "../chakra-ui/chakra-ui.custom-theme"



export default function App({ Component, pageProps}){
    return(
        <ChakraProvider theme= {theme} >
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <Component {...pageProps} />
        </ChakraProvider>
            
    )
}