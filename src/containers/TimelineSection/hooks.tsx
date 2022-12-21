import { Image, HStack, Text, VStack, Box } from '@chakra-ui/react'
import { SectionNationalCarouselProps } from '../../types'

export const useNationalHandleProps = () => {
  const handleRenderCarousel = ({ image, alt, year, title, description }: SectionNationalCarouselProps, index: number) => (
    <Box
      display={'flex'}
      height={{ base: '82vh', sm: '85vh', md: '50vh', lg: '60vh' }}>
      <HStack
        flexDir={{ base: 'column', md: 'row' }}
        key={`national-carousel-${index}`}
        alignItems={'center'}
        height={'100%'}
      >
        <Image
          alt={alt}
          maxW={{ base: '70%', md: '50%', lg: '40%' }}
          paddingLeft={{ base: '0%', lg: '5%' }}
          src={image} />
        <VStack
          maxW={{ base: '70%', md: '50%' }}
          height={{ base: 230, md: 300, lg: 250 }}
          justifyContent={{ base: 'start', md: 'center' }}
          alignItems={'start'}
          paddingLeft={{ base: '0%', md: '5%' }}
        >
          <Text fontSize='3xl' color={'blue.300'}>{year}</Text>
          <Text fontSize='1xl' fontWeight={'bold'}>{title}</Text>
          <Text >{description}</Text>
        </VStack>
      </HStack >
    </Box>
  )

  return [handleRenderCarousel]
}
