import { Box, Container, Link, Stack} from '@chakra-ui/react'

function Footer1(){
    return(
        <Box borderTop={"1px solid #cad0d9"} marginTop="70px" backgroundColor={"white"}>
        <Container maxW='70%'  padding="20px">
            <Stack direction={['column', 'row']} >
                <Link color='teal.500' href='#'>Terms and Conditions</Link>
                <Link color='teal.500' href='#'>Privacy</Link>
                <Link color='teal.500' href='#'>Interest-Based Ads</Link>
            </Stack>
            <Stack direction={['column', 'row']}>
            <Link color='teal.500' href='#'>Mobile Site</Link>
            </Stack>
            <Stack>
            <Link>Prices and offers are subject to change. © 2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.</Link>
            </Stack>
        </Container>
        </Box>
    )
}

export default Footer1