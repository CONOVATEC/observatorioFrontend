import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useAboutObservatoryInfo } from '../BannerAboutSection/hooks';

function GoalAboutSection() {
  const { mission, vision } = useAboutObservatoryInfo()

  return (
    <HStack
      flexDir={{ base: 'column', md: 'row' }}
      p={8}
      mt={10}
      background={'blackAlpha.800'}
      gap={{ base: 4, md: 0 }}>
      <VStack
        width={{ base: 'full', md: '60%' }}
        height={{ base: '30vh', md: '50vh', sm: '40vh' }}
        alignItems={{ base: 'center', lg: 'start' }}
        justifyContent={'center'}
        p={4}
        textColor={'White'}
        rounded={10}>
        <Text
          fontWeight={'bold'}
          fontSize={'2xl'}>
          Próposito
        </Text>
        <Text
          pr={{ base: '0%', lg: '30%' }}
          textAlign={{ base: 'center', lg: 'start' }}>
          Nuestro próposito es informar sobre los retos de las juventudes, buscando incetivar acciones para transformar la sociedad hacia un bien común.
        </Text>
      </VStack>
      <VStack
        width={{ base: 'full', md: '60%', lg: '35%' }}
        height={{ base: '45vh', md: '50vh', sm: '40vh' }}
        px={4} rounded={10} textColor={'blackAlpha.800'}
        bg={'white'}>
        <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075059/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/%C3%8Dcono_visi%C3%B3n_hl4stb.png' alt='vison-observatorio' boxSize={'100px'} />
        <Text fontWeight={'bold'} fontSize={'2xl'}>Visión</Text>
        <Text
          textAlign={'center'}>
          {vision}
        </Text>
      </VStack>
      <VStack
        width={{ base: 'full', md: '60%', lg: '35%' }}
        height={{ base: '45vh', md: '50vh' }}
        px={4}
        rounded={10}
        textColor={'blackAlpha.800'}
        bg={'white'}>
        <Image src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075069/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/%C3%8Dcono_Misi%C3%B3n_dkwsho.png' alt='mision-observatorio' boxSize={'100px'} />
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          Misión
        </Text>
        <Text textAlign={'center'}>
          {mission}
        </Text>
      </VStack>
    </HStack >
  )
}

export default GoalAboutSection