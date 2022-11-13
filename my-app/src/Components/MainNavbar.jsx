import { Box , HStack, Input , Text } from "@chakra-ui/react";


function MainNavbar(){
    return(  
        <Box as="section" width={"100%"}  padding="20px" paddingLeft={"40px"} paddingRight="40px"  borderBottom={"1px solid white"} display="flex" justifyContent="space-between" color={"white"}  backgroundColor="#0046be" >
    <Box as="nav" bg="bg-surface" marginLeft={"20px"} >
        <HStack spacing="10" >
            <Box></Box>
          <Box>
            
            <button variant='link'  textDecorationLine={"none"}   color='white'>Menu</button>
            </Box> 
          <Box><Input type={"text"} placeholder="Search" width={"600px"} backgroundColor="white" color={"black"} /></Box>
        </HStack>
    </Box>
    <Box as="nav" bg="bg-surface" >
        <HStack spacing="10" >
            
          <Box><Text as="b" fontSize='25px'>Cart</Text></Box> 
        </HStack>
    </Box>
    <br/>
    
        </Box>
       
  )
}

export default MainNavbar