import { Box, Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { ILogoData, SectionProps } from '../types'

export const useRenderPropsLogosCards = ()=>{

  const handleCarousel = useCallback(({url_image, name } : ILogoData, index: number) =>
  <Box
    aria-label={name}
    key={`carousel-image-${index}`}
    height={{base:'50vh', md:'1xl'}}
    backgroundSize='50%'
    position="relative"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundImage={`url(${url_image})`}/>
 , [])

 const handleStackRender = useCallback(({ url_image }: ILogoData, index: number, array:ILogoData[]) => 
    <Box
      key={`sponsor-${index}`}
      width={`calc(96%/${array.length})`}
      height='50vh'
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize='contain'
      backgroundImage={`url(${url_image})`} />
    , [])


  return [handleCarousel, handleStackRender]
}

export const useRenderPropsMainCards = () =>{
  const _handleMainCardsRender = useCallback((data: SectionProps, index: number)=>{
    const { title, image, content_body, alt_image } = data

    return (
      <Card 
        key={`card-carousel-first-${index}`}
        maxW={'250px'} 
        rounded={0} 
        height={'200%'}
        backgroundColor='Background'>
        <CardBody backgroundColor='Background'>
          <Image src={image} alt={alt_image} borderRadius="lg" boxSize="100px" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text size="xs">{content_body} </Text>
          </Stack>
        </CardBody>
        <Box bg="purple.500" h="5px" />
        <Divider />
      </Card>
    )
  }, [])

  return [_handleMainCardsRender]
}