import { Button, Container, Heading , Input , Link , Text} from '@chakra-ui/react'
import Navbar1 from "./Navbar1"
import Footer1 from './Footer1'



function Signin(){
    return(<div style={{backgroundColor:"#f0f2f4"}}>
    <Navbar1/>
    <Container maxW='400px' borderRadius={"5px"} border={"1px solid #cad0d9"} marginTop="40px" padding="30px" backgroundColor={"white"}>
        <Heading>Sign In to Electrions World</Heading>
        <Input type={"email"} placeholder='Email Address' size='lg' ></Input>
        <Input type={"password"} placeholder='Password' size='lg' ></Input>
        <Link color='teal.500' href='#'>
        Forgot your password?
        </Link>
        <Input type={"button"} value="Sign In" bg={"#0046be"} color="white" size='lg'></Input>
        <hr borderTop="3px double #333" />
        <Button marginTop={"10px"} width={"100%"} size='lg' color={"#0046be"} border={"1px solid #0046be"} _hover={{ bg: '#0046be' , color:"white" }}>Sign In with a PassKey</Button>
        <Button width={"100%"} size='lg' colorScheme="white"  _hover={{ bg: 'black' , color:"white" }} color="black"  border={"1px solid black"} >Sign In with a Apple</Button>
        <Button width={"100%"} size='lg'  border={"1px solid #0046be"} _hover={{ bg: '#0046be' , color:"white" }} color={"#0046be"} >Sign In with a Google</Button>
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

export default Signin