import {Heading, Image, Stack, Text, VStack, Card, CircularProgress, Box } from '@chakra-ui/react'
import { useGetInfoCmpjQuery } from '../../redux/aboutCmpj/slice'
import {useMemo} from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import YoutubePlayer from '../../components/YoutubePlayer';

const socialIcons = [
  { name: <FaFacebook />, href: 'https://www.facebook.com/CMPJOficial' },
  { name: <FaTiktok />, href: '' }, 
  { name: <FaInstagram />, href: '' }
]

function BannerCmpjSection() {
   const {data ,isLoading, error } = useGetInfoCmpjQuery(null)  
   const cmpjData = useMemo(() => {
    const [firstItem] = [data?.data]
    return firstItem
   },[data])
   
  const [firstValue] = cmpjData??[]
 
  return (
    isLoading ? <CircularProgress /> :
    <Box>
    <Stack
      flexDirection={{base:'column', md:'row'}}
      paddingX={'28px'}
      height={'45vh'}      
      gap ={'1rem'}
    > 
      <YoutubePlayer link={firstValue?.link_video} />
      <VStack 
        width={'60%'}
      >
        <Text
          fontWeight={'bold'}
          fontSize={'2xl'}>
            {firstValue?.title}
        </Text>
        
        <Text>
          {firstValue?.description}
        </Text>
        <Stack>
          <Image 
            filter='invert(1)'
            boxSize='200px'
            objectFit='cover'
            height='100%'
            alt='logo observatorio'
            src="https://res.cloudinary.com/df5nwnlnu/image/upload/v1671317038/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/logo_cmpj_vezma4.png"  
          />

          <Stack color='white'>
            {
              socialIcons
                .map(({ name, href }, index) => <Link key={`social-index${index}`} href={href}>{name}</Link>)
            }
          </Stack>
        </Stack>
      </VStack>      
    </Stack>
    
    <Heading textAlign='center' as='h2' size='lg'>
      Instancias de direccion     
    </Heading>
    
    <Text textAlign='center' p='6' as='h2' size='lg' >CMPJ se organiza mediante dos instancias de direccion</Text>    
       
    <Stack
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-evenly' }}
      alignItems='center'
      p={8}
      mt={10}      
      gap={{ base: 4, md: 0 }}
    >      
    <VStack
        width={{ base: 'full', md: '60%', lg: '35%' }}
        height={{ base: '45vh', md: '50vh', sm: '40vh' }}
        px={4} rounded={10} textColor={'blackAlpha.800'}
        bg={'white'}>
        <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/INSTANCIAS%20DE%20DIRECCI%C3%93N/%C3%8Dcono_Asamblea_General_vsegzz.png' alt='vison-observatorio' boxSize={'100px'} />
        <Text fontWeight={'bold'} fontSize={'2xl'}>{firstValue?.title_assembly}</Text>
        <Text
          textAlign={'center'}>
          {firstValue?.description_assembly}
        </Text>
      </VStack>
      <VStack
        width={{ base: 'full', md: '60%', lg: '35%' }}
        height={{ base: '45vh', md: '50vh' }}
        px={4}
        rounded={10}
        textColor={'blackAlpha.800'}
        bg={'white'}>
        <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/INSTANCIAS%20DE%20DIRECCI%C3%93N/%C3%8Dcono_Junta_Directiva_mhnz2q.png' alt='mision-observatorio' boxSize={'100px'} />
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          {firstValue?.title_directive}
        </Text>
        <Text textAlign={'center'}>
          {firstValue?.description_directive}
        </Text>
      </VStack>
    </Stack >
</Box>
  )
}

export default BannerCmpjSection