import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useAboutObservatoryInfo } from './hooks'

function BannerAboutSection() {
  const { description } = useAboutObservatoryInfo()

  return (
    <HStack
      paddingX={'8px'}
      height={'45vh'}
      backgroundImage={'url("https://res.cloudinary.com/df5nwnlnu/image/upload/v1671396068/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOSOTROS/fondo-quienes_somos_V2_xtb3e7.png")'}>
      <VStack
        paddingX={{ base: '10%', md: '19%' }}
        spacing={{ base: 5, md: 10 }}
        textColor='white'>
        <Text fontWeight={'bold'} fontSize={'3xl'}>
          ¿Quiénes somos?
        </Text>
        <Text>
          {description}
        </Text>
      </VStack>
    </HStack>
  )
}

export default BannerAboutSection