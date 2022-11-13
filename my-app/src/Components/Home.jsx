import { Box, Container, Link , Text ,Image, Button, VStack,Divider, Heading} from "@chakra-ui/react"



const data=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-laptops-686b0d25-dbcf-484f-8c88-046275bf8ef5.jpg;maxWidth=220",
        title:"Laptops & Computers"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tv-364a6674-a730-4b5b-a7c9-94d55f7e82b5.jpg;maxWidth=220",
        title:"TVs & Projectors"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220",
        title:"Apple"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-vg-d7f85256-6a3f-4f54-872d-c89c69954d73.jpg;maxWidth=220",
        title:"Video Games, Consoles & VR"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-phones-4e886f8b-2e80-47db-b8eb-1d10332ffd44.jpg;maxWidth=220",
        title:"Cell Phones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-mappls-561d66ab-817b-4d28-b076-5d889afff7a2.jpg;maxWidth=220",
        title:"Major Appliances"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-headphones-025fb4ed-2665-4381-9384-b921e801d758.jpg;maxWidth=220",
        title:"Headphones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-pcgaming-be2db030-1456-4789-a265-0f7da417405f.jpg;maxWidth=220",
        title:"PC Gaming"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tablets-79bf758a-ebc9-46bb-ba84-3782cdfd09ca.jpg;maxWidth=220",
        title:"Tablets & E-Readers"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-cameras-0135d468-d14a-4a26-8b44-dd723c2b0953.jpg;maxWidth=220",
        title:"Cameras, Camcorders & Drones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-speakers-4589e35d-d21d-49b6-8a2f-e747da604278.jpg;maxWidth=220",
        title:"Sound Bars, Speakers & Streaming Devices"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-wearabletech-b007a144-b78a-42a9-9233-b97f66bce317.jpg;maxWidth=220",
        title:"Wearable Technology"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220",
        title:"Small Appliances, Floor Care & Home Air Quality"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-printers-c8eac98d-636f-4487-88d6-f77494875b92.jpg;maxWidth=220",
        title:"Printers, Home Office & Computer Accessories"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smarthome-99f9e854-2362-44a8-ba2c-9242be12c596.jpg;maxWidth=220",
        title:"Smart Home, Security & Wi-Fi"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-toys-dbd5f58e-beb9-4ca2-8d48-3db5e29c5e63.jpg;maxWidth=220",
        title:"Toys, Games, Collectibles & Movies"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-etranspo-4be6c360-45af-4d45-8429-6b20915e6763.jpg;maxWidth=220",
        title:"Electric Transportation"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-health-1c7229b6-26c8-44a1-94ea-62315c8c6a4b.jpg;maxWidth=220",
        title:"Health, Fitness & Personal Care"
    }
]

const Newarrivals=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520136_rd.jpg;maxHeight=400;maxWidth=400",
        title:"Meta Quest Pro"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524812_sd.jpg;maxHeight=400;maxWidth=400",
        title:"Loop8: Summer of Gods - Xbox One"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=400;maxWidth=400",
        title:"Apple - 10.9-Inch iPad (Latest Model) with Wi-Fi - 64GB - Blue"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524410_rd.jpg;maxHeight=400;maxWidth=400",
        title:"Tramontina - 10 Fry Pan - Silver"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517579_sd.jpg;maxHeight=400;maxWidth=400",
        title:"LG - 65 Class UN9000 Series LED 4K UHD Smart webOS TV"
    }
]


const Ourfeaturedoffers=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_6509653-macbook-pro-MMT-574306-0815-2c6fefe1-d0ed-4399-8b8a-43734c8ab582.jpg;maxHeight=504;maxWidth=740",
        title:"MacBook Save up to $200 on select models.",
        details:"Minimum savings is $50."
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-604780_der-3c8f3ec6-cce4-468c-b0bd-80f4a2783f0d.jpg;maxHeight=504;maxWidth=740",
        title:"New video game releases.",
        details:"Find the blockbusters Sonic Frontiers, Cobra Kai 2: Dojos Rising, and God of War Ragnarök, plus Atari 50: The Anniversary Collection."
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-604804-namebrandtv-pol_der-df0550ce-6248-40ed-a170-07adfed8ea92.jpg;maxHeight=504;maxWidth=740",
        title:"Save up to $700 on select Samsung, LG and Sony TVs.",
        details:"Enjoy stunning color and clarity with a feature-packed TV from these popular brands."
    }
]

const Holidaysolutions=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78345-explore-google-ecosystem-22a5a71a-7a6e-4033-ba88-318e0767ea2e.jpg;maxHeight=432;maxWidth=432",
        title:"Create a Google ecosystem"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78345-explore-entertaining-7a8519ec-25f6-4e59-84ab-97c712cc31c9.jpg;maxHeight=432;maxWidth=432",
        title:"Entertaining family and friends"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78345-explore-health-fdf76963-b3f9-4530-8381-80565b2638c9.jpg;maxHeight=432;maxWidth=432",
        title:"At-home health solutions"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78345-explore-travel-1391617d-1d81-4b22-b15c-23d7652ee680.jpg;maxHeight=432;maxWidth=432",
        title:"Holiday travel essentials"
    }
]

const GiftIdeas=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78843-explore-selfcare-cbbd67e5-fb66-47f5-b40b-0175548a7572.jpg;maxHeight=432;maxWidth=432",
        title:"Self-care gifts"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78843-explore-unique-cf078463-6ad6-4868-9d33-10d6c029763c.jpg;maxHeight=432;maxWidth=432",
        title:"Unique gifts"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78843-explore-retro-55948135-a217-44e4-9145-0e758ba1aae9.jpg;maxHeight=432;maxWidth=432",
        title:"Retro gifts"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78843-explore-foodies-bd391b35-91e5-4a91-bf94-b1b65ac44d51.jpg;maxHeight=432;maxWidth=432",
        title:"Gifts for foodies"
    }
]

const Holidayhosting=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77719-explore-floorcare-893dc9b0-48bc-4d6d-bc94-ca49264e5ad2.jpg;maxHeight=432;maxWidth=432",
        title:"Floor care"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77719-explore-smarthome-c5639f99-c8dc-4440-9a20-66bd7c6411a9.jpg;maxHeight=432;maxWidth=432",
        title:"Smart home"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77719-explore-appls-13d7383e-6ee4-4da1-85f3-fff499213036.jpg;maxHeight=432;maxWidth=432",
        title:"Small appliances"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77719-explore-gameroom-55388bc6-df68-469d-b591-af57dd8e48fa.jpg;maxHeight=432;maxWidth=432",
        title:"Game room"
    }
]

function Home(){

    
    return(<Box>
       
      

        
        <Box padding={"50px"}  backgroundColor={"#093796"}>
            <Container maxW='70%'display={"grid"} gridTemplateColumns="repeat(6, 1fr)" gap={"20px"}  marginTop={"100px"}>
        {data.map((item)=>(<Box ><Link color={"#f9dc04"}><Box overflow='hidden' backgroundColor="white" borderRadius={"50%"} padding={"20px"}  border={"3px solid #4c7ee9"}><img  src={item.image}/></Box><Text marginTop="10px" fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Container></Box>


    <Box display={"grid"} gridTemplateColumns="repeat(5, 1fr)" gap={"20px"} marginTop="40px"  marginLeft="10px" marginRight={"10px"}>
    {Newarrivals.map((item)=>(<Box border={"1px solid #dfe2e7"} padding="30px"><Link color='teal.500'><Box backgroundColor="white" ><Image height={"120px"} margin="auto" src={item.image}/></Box><Text marginTop="20px" color={"blue"} fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Box>


    <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"} marginTop="40px" border={"3px solid black"}  marginLeft="10px" marginRight={"10px"}>
        <VStack border={"1px solid red"}>
            <Button width={"100px"}>Outlet Deals</Button>
            <Box></Box>
        </VStack>
        <Box border={"1px solid red"}>
            <Button>Gift ideas by price</Button>
        </Box>
    </Box>
    <Box></Box>


    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"}  marginLeft="10px" marginRight={"10px"} marginTop="40px">
        <Box><Image height={"480px"} src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-606618-bf-mappls-cc48c3c0-5d58-4d66-87d6-7b21b6c77ca4.jpg;maxHeight=960;maxWidth=960"></Image></Box>
        <Box><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-76777-ghp-dotd-102422-1382f08e-adf4-4e20-9dd3-034ecd8b7066.jpg;maxHeight=960;maxWidth=960"></Image></Box>
        <Box><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-588432-outlet-ea2b69c3-e9a7-4eee-a507-04c149472ab8.png;maxHeight=960;maxWidth=960"></Image></Box>
    </Box>
    
    <Box marginTop={"40px"} marginLeft="10px" marginRight={"10px"}>
        <Heading width={"200px"}  as='h2' size='md'>Our featured offers</Heading>
        <Divider  borderColor={"#A0AEC0"} marginTop={"5px"}/>
        <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"40px"} marginTop="15px">
            {Ourfeaturedoffers.map((item)=>(<Box padding={"10px"} borderRight="1px solid #dbdee5"><Box paddingLeft={"40px"} paddingRight="40px" ><Image src={item.image}/></Box><Heading><Link>{item.title}</Link></Heading><Text>{item.details}</Text></Box>))}
        </Box>
    </Box>

    <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"40px"} marginLeft="10px" marginRight={"10px"} marginTop="40px">
        <Box display={"flex"}  border={"1px solid #dfe2e7"} height="100px" backgroundColor={"#f0f2f4"} >
            <Box marginLeft={"200px"}>
                <Image height={"100px"} src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/gl-77114-giftideas-ep-ghp-half_der-4ed4c996-c753-4780-8867-ab5a6a3ba4a1.png" />
            </Box>
            <Box paddingTop={"20px"}>
                <Heading as='h2' size='md'>Gift Ideas.</Heading>
                <Text>Cover your entire list in one stop.</Text>
                <Link color={"blue"}>Shop Now</Link>
            </Box>
        </Box>
        <Box display={"flex"}  border={"1px solid #dfe2e7"} height="100px" backgroundColor={"#f0f2f4"} >
            <Box marginLeft={"200px"}>
                <Image height={"100px"} src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-65963-expert-210831-70c599ed-fc34-47d8-9b93-85f899d93c8f.png" />
            </Box>
            <Box paddingTop={"20px"}>
                <Heading as='h2' size='md'>Shop with an expert, right from home.</Heading>
                <Text>Call, chat, video chat or in-home consultation..</Text>
                <Link color={"blue"}>Shop with an Expert</Link>
            </Box>
        </Box>    
    </Box>

    
    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"} marginTop={"40px"} marginLeft="10px" marginRight={"10px"} >
        <Box display={"flex"}  height={"120px"} paddingLeft="100px" borderRight={"1px solid #dfe2e7"}>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160"/>
            <Box marginTop={"40px"}>
                <Text>Free next-day delivery</Text>
                <Text>on thousands of items.</Text>
            </Box>
        </Box>
        <Box display={"flex"}  height={"120px"} paddingLeft="100px" borderRight={"1px solid #dfe2e7"}>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-34525-app-vpe-storepickup1-206866.png;maxHeight=160;maxWidth=160"/>
            <Box marginTop={"40px"}>
                <Text>Ready in one hour</Text>
                <Text>with Store or Curbside Pickup.</Text>
            </Box>
        </Box>
        <Box display={"flex"}  height={"120px"} paddingLeft="100px">
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160"/>
            <Box marginTop={"40px"}>
                <Text>Same-day delivery.</Text>
            </Box>
        </Box> 
    </Box>

    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"} marginTop={"40px"} marginLeft="10px" marginRight={"10px"}>
        <Box  backgroundColor="#f0f2f4">
            <Box  width="180px" marginTop={"20px"}><b>Holiday solutions</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidaysolutions.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4">
            <Box width="130px" marginTop={"20px"}><b>Gift Ideas</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {GiftIdeas.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4">
            <Box width="200px" marginTop={"20px"}><b>Gifts for the outdoors</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidayhosting.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
    </Box>

    </Box>)
}

export default Home