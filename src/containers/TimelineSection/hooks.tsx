import { Image, HStack, Text, VStack, Box } from '@chakra-ui/react'
import { SectionNationalCarouselProps } from '../../types'

export const useNationalHandleProps = () => {
  const handleRenderCarousel = ({ image, alt, year, title, description }: SectionNationalCarouselProps, index: number) => (
    <Box
      display={'flex'}
      alignItems={'center'}
      height={'60vh'}>
      <HStack
        flexDir={{ base: 'column', md: 'row' }}
        key={`national-carousel-${index}`}
      >
        <Image
          alt={alt}
          maxW={'40%'}
          src={image} />
        <VStack
          maxW={'50%'}
          height={250}
          justifyContent={'center'}
          alignItems={'start'}
          paddingLeft={'5%'}
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
