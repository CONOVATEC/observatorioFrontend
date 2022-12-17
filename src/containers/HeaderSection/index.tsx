import { memo } from 'react'
import { Stack } from '@chakra-ui/react'
import { dataCards } from '../../config'
import { useRenderPropsMainCards } from '../../hooks'
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'
import CustomHero from '../CustomHero'

const HeaderSection = () => {
  const [_handleMainCardsRender, _handleMainCardsCarouselRender] = useRenderPropsMainCards()

  return (
    <Stack as="header">
      <CustomHero />
      <ResponsiveGalleryWithCarousel
        data={dataCards}
        carouselRenderItems={_handleMainCardsCarouselRender}
        stackRenderItems={_handleMainCardsRender}
        carouselProps={{
          height: { base: '50vh', md: '40vh' },
          top: -45,
          pl: 16,
          pr: 16
        }}
        stackProps={{
          height: 180,
          position: 'relative',
          top: -25,
          pl: 8,
          pr: 8,
          mb: 16
        }}
      />
    </Stack>
  )
}

export default memo(HeaderSection)