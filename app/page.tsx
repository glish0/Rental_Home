'use client'


import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '@/utils/fetchApi'
import { useEffect, useState } from 'react'
import { propertiesForSale, propertiesForRent } from './api/route'
import Property from '@/components/Property'


type BannerProps = {
  purpose: string, 
  title1: string , 
  title2: string, 
  desc1: string, 
  desc2: string,
  buttonText: string,
  imageUrl: string,
  linkName: string
} 

type HomeProps = {
  propertiesForSale: any[];
  propertiesForRent: any[];
};



const Banner = ({purpose, title1 , title2, desc1, desc2, buttonText, linkName, imageUrl } : BannerProps) => {
  return(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text  fontSize="3xl" fontWeight="bold">
        {title1}<br />{title2}
      </Text>
      <Text color="gray.700" fontSize="lg" fontWeight="medium" paddingBottom="3" paddingTop="3">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl" colorScheme='gray'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>

    </Box>
  </Flex>
  )
}

export default  function Home() {
  const [rentProperties, setRentProperties] = useState([]);
  const [saleProperties, setSaleProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const propertiesForSaleData = await propertiesForSale();
        setSaleProperties(propertiesForSaleData.hits);
        console.log('rent',propertiesForSaleData.hits);
      } catch (error) {
        console.error('Error fetching properties for sale:', error);
      }
    }

    fetchData();
  }, []); 
  useEffect(() => {
    async function fetchData() {
      try {
        const propertiesForRentData = await propertiesForRent();
        setRentProperties(propertiesForRentData.hits);
        console.log('rent',propertiesForRentData.hits);
      } catch (error) {
        console.error('Error fetching properties for sale:', error);
      }
    }

    fetchData();
  }, []); 
  return (
    <Box>
    
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for=rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
        {/* fetch the propertyiest and map over them ''' */}
        {rentProperties.map((property, index) => <Property property={property} key={index} />)}
      </Flex>

      <Banner 
        purpose="BUY A HOME"
        title1="Find , Buy and Own Your"
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for=rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008' 
      />
      <Flex flexWrap="wrap">
      {saleProperties.map((property, index) => <Property property={property} key={index} />)}
      </Flex>
    </Box>
  )
}

