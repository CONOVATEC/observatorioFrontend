import {Heading, Image, Stack, Text, VStack, Card, CircularProgress, Box } from '@chakra-ui/react'

interface PropsList  {
    title_assembly :string,
    description_assembly: string,
    title_directive: string,
    description_directive : string
}
export default function InstanceCmpj ({title_assembly,description_assembly,title_directive,description_directive}:PropsList){
    return (
      <Box>
        <Heading textAlign='center' as='h2' size='lg'>
          Instancias de direccion     
        </Heading>
    
        <Text textAlign='center' p='6' as='h2' size='lg' >CMPJ se organiza mediante dos instancias de direccion</Text>    
       
        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          alignItems='center'
          p={8}      
          gap={{ base: 4, md: 0 }}
        >      
            <VStack
              width={{ base: 'full', md: '60%', lg: '35%' }}
              height={{ base: 'full', md: '300', sm: 'full' }}
              px={4} rounded={10} textColor={'blackAlpha.800'}
              bg={'white'}>
              <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/INSTANCIAS%20DE%20DIRECCI%C3%93N/%C3%8Dcono_Asamblea_General_vsegzz.png' alt='vison-observatorio' boxSize={'100px'} />
              <Text fontWeight={'bold'} fontSize={'2xl'}>{title_assembly}</Text>
              <Text
                textAlign={'center'}>
                {description_assembly}
              </Text>
            </VStack>
            <VStack
              width={{ base: 'full', md: '60%', lg: '35%' }}
              height={{ base: 'full', md: '300' , sm:'full' }}
              px={4}
              py={2}
              rounded={10}
              textColor={'blackAlpha.800'}
              bg={'white'}>
              <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075060/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS%20CMPJ/INSTANCIAS%20DE%20DIRECCI%C3%93N/%C3%8Dcono_Junta_Directiva_mhnz2q.png' alt='mision-observatorio' boxSize={'100px'} />
              <Text fontWeight={'bold'} fontSize={'2xl'}>
                {title_directive}
              </Text>
              <Text textAlign={'center'}>
                {description_directive}
              </Text>
            </VStack>
        </Stack >
      </Box>
    )
}