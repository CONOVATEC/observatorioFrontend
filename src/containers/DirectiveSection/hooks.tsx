import { Image, Stack, Text, VStack } from '@chakra-ui/react'
import { SectionAboutCarouselProps } from '../../types'

export const useDirectiveHandleProps = ()=>{
  const handleRenderCarousel = ({image, alt, fullName, position} : SectionAboutCarouselProps, index: number)=>(
    <VStack
      mt={'25%'} 
      key={`directiva-${index}`} 
      alignItems='center'
      height='100%' 
      justifyContent='center'>
      <Image 
        alt={alt}
        boxSize={200}
        src={image}
        margin='auto'/>
      <Stack justifyContent='center' textAlign='center'>
        <Text>{fullName}</Text>
        <Text>{position}</Text>
      </Stack>
    </VStack>
  )
  
  return [ handleRenderCarousel ]
}
