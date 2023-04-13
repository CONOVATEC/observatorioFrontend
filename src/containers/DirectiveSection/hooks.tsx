import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { SectionAboutCarouselProps } from '../../types';

export const useDirectiveHandleProps = () => {
  const handleRenderCarousel = (
    { urlImage, alt, fullName, position }: SectionAboutCarouselProps,
    index: number
  ) => (
    <HStack
      as={Box}
      key={`directiva-carousel-${index}`}
      height={{ base: '45vh' }}
    >
      <VStack
        maxW={'200px'}
        height={'100%'}
        marginLeft={'auto'}
        marginRight={'auto'}
      >
        <Image alt={alt} boxSize={200} src={urlImage} />
        <Stack justifyContent='center' textAlign='center'>
          <Text>{fullName}</Text>
          <Text>{position}</Text>
        </Stack>
      </VStack>
    </HStack>
  );

  const handleRenderStack = (
    { urlImage, alt, fullName, position }: SectionAboutCarouselProps,
    index: number
  ) => (
    <HStack
      as={Box}
      key={`directiva-stask-${index}`}
      maxW={'200px'}
      height={'75%'}
    >
      <VStack
        backgroundColor='transparent'
        height={'100%'}
        alignItems={'center'}
      >
        <Image alt={alt} boxSize={200} src={urlImage} />
        <Stack justifyContent='start' mt={3} width={'full'}>
          <Text>{fullName}</Text>
          <Text>{position}</Text>
        </Stack>
      </VStack>
    </HStack>
  );

  return [handleRenderCarousel, handleRenderStack];
};
