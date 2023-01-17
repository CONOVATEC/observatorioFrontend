import { HStack, Text, VStack } from '@chakra-ui/react'
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'
import { useDirectiveHandleProps } from './hooks'
import { useGetDirectiveApiQuery } from '../../redux/directive/slice';

const DirectiveSection = () => {
  
  const { data, isLoading}  = useGetDirectiveApiQuery(null);
  const directiveData = data.data;
  const [_handleRenderCarousel, _handleRenderStack] = useDirectiveHandleProps()


  return (
    <>
      <VStack spacing={4} mt={10}>
        <Text fontWeight={'bold'} fontSize={'2xl'}>Directiva Del Observatorio Joven</Text>
        <Text fontSize={'2xl'}>
          2022-2023
        </Text>
      </VStack>
      <ResponsiveGalleryWithCarousel
        // TODO: crearte render propsd for desktopView 
        stackRenderItems={_handleRenderStack}
        stackProps={{
          height: '60vh',
          position: 'relative',
          pl: 8,
          pr: 8,
        }}
        carouselRenderItems={_handleRenderCarousel}
        carouselProps={{
          height: { base: '55vh' },
          pt: 8,
          pl: 16,
          pr: 16,
        }}
        data={directiveData} />
    </>
  )
}

export default DirectiveSection