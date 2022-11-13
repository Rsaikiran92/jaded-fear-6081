import { Box , Link ,PopoverTrigger,PopoverContent,PopoverArrow,PopoverHeader,PopoverBody,PopoverCloseButton,Button,Popover} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"


function MainNavbar2(){
    return (<Box bg='#0046be' w='100%' p={4} color='white' display={"flex"} justifyContent="space-between" paddingRight={"30px"} paddingLeft="30px">
    <Box display={"flex"} gap="15px">
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >Holiday Deals<ChevronDownIcon/></Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue">Back Friday Deals Right Now</PopoverHeader>
                    <PopoverHeader color="blue">Gift Ideas</PopoverHeader>
                    <PopoverHeader color="blue">Gift Carts</PopoverHeader>
                    <PopoverHeader color="blue">Explore Holiday Inspirations</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
        <Link>Top Deals</Link>
        <Link>Deal of the Day</Link>
        <Link>Totaltech Membership</Link>
        <Link>Credit Cards</Link>
        <Link>Gift Cards</Link>
        <Link>Gift Ideas</Link>
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >More <ChevronDownIcon/></Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue">Health & Wellness</PopoverHeader>
                    <PopoverHeader color="blue">Best Buy Outlet</PopoverHeader>
                    <PopoverHeader color="blue">Best Buy Business</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
    </Box>
    <Box  display={"flex"} gap="15px">
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >More <ChevronDownIcon/></Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue" width={"100%"}><Button width={"100%"}><Link href='/login'>Sign In</Link></Button></PopoverHeader>
                    <PopoverHeader color="blue" width={"100%"}><Button width={"100%"}><Link href='/signup'>Create Account</Link></Button></PopoverHeader>
                    <PopoverHeader color="blue">Account</PopoverHeader>
                    <PopoverHeader color="blue">Orders & Purchases</PopoverHeader>
                    <PopoverHeader color="blue">Your Products</PopoverHeader>
                    <PopoverHeader color="blue">Payment Methods</PopoverHeader>
                    <PopoverHeader color="blue">Protection Plans & Subscriptions</PopoverHeader>
                    <PopoverHeader color="blue">Digital Library</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
        <Link>Recently Viewed</Link>
        <Link>Order Status</Link>
        <Link>Saved Items</Link>
    </Box>
  </Box>)
}

export default MainNavbar2