import { Button, Container, Heading , Input , Link , Text} from '@chakra-ui/react'
import Navbar1 from "./Navbar1"
import Footer1 from './Footer1'


function CreateAccount(){
    return(<div style={{backgroundColor:"#f0f2f4"}}>
    <Navbar1/>
    <Container maxW='400px' borderRadius={"5px"} border={"1px solid #cad0d9"} marginTop="40px" padding="30px" backgroundColor={"white"}>
        <Heading>Sign In to Electrions World</Heading>
        <Input type={"text"} placeholder='First Nane' size='lg' marginTop="5px"></Input>
        <Input type={"text"} placeholder='ELast Name' size='lg'marginTop="10px" ></Input>
        <Input type={"email"} placeholder='Email Address' size='lg'marginTop="10px" ></Input>
        <Input type={"password"} placeholder='Password' size='lg' marginTop="10px"></Input>
        <Input type={"password"} placeholder='Confirm Password' size='lg'marginTop="10px" ></Input>
        <Input type={"Number"} placeholder='Number' size='lg'marginTop="10px" ></Input>
        
        <Input type={"button"} value="Create Account" bg={"#0046be"} color="white" size='lg'marginTop="10px"></Input>
        <hr borderTop="3px double #333" />
        
        <Button width={"100%"} size='lg'  border={"1px solid #0046be"} _hover={{ bg: '#0046be' , color:"white" }} color={"#0046be"}marginTop="10px" >Sign In with a Google</Button>
        <Text fontSize='md'>
        By continuing you agree to our{' '}
        <Link color='teal.500' href='#'>
        Terms and Conditions,
        </Link>
        {' '}our{' '}
        <Link color='teal.500' href='#'>
        Privacy Policy,
        </Link>
        {' '}and the{' '}
        <Link color='teal.500' href='#'>
        My Best Buy® Program Terms.
        </Link>
        </Text>
    </Container>
      <Footer1/>
    </div>)
}

export default CreateAccount