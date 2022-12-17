import { memo, useMemo } from 'react'
import { Stack } from '@chakra-ui/react'
import { useRenderPropsLogosCards } from '../../hooks';
import { useGetSponsorImagesQuery } from '../../redux/sponsors/slice';
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel'

const LogosSection = () => {
  const { data, error } = useGetSponsorImagesQuery(null)

  const logosData = useMemo(() =>
    data?.data, [data?.data]
  )

  const [_handleRenderLogosCarousuel, _handleRenderLogosStack] = useRenderPropsLogosCards();

  return (
    <Stack as="section">
      <ResponsiveGalleryWithCarousel
        stackProps={{ px: 8 }}
        data={logosData}
        carouselRenderItems={_handleRenderLogosCarousuel}
        stackRenderItems={_handleRenderLogosStack}
      />
    </Stack>
  )
}

export default memo(LogosSection)