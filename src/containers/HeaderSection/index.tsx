import { memo } from 'react';
import { Stack } from '@chakra-ui/react';
import { useRenderPropsMainCards } from '../../hooks';
import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel';

import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import MainNewsTrend from '../MainNewsTrend';

const HeaderSection = () => {
  const [_handleMainCardsRender, _handleMainCardsCarouselRender] =
    useRenderPropsMainCards();
  const { data: datosPS, error, isLoading } = useSWR('/api/tematics', fetcher);

  return (
    <Stack as='header'>
      <MainNewsTrend />
      <ResponsiveGalleryWithCarousel
        data={datosPS?.data.slice(0, 4)}
        carouselRenderItems={_handleMainCardsCarouselRender}
        stackRenderItems={_handleMainCardsRender}
        carouselProps={{
          height: { base: '50vh', md: '40vh' },
          top: -45,
          pl: 16,
          pr: 16,
        }}
        stackProps={{
          height: 180,
          position: 'relative',
          top: -25,
          pl: 8,
          pr: 8,
          mb: 16,
        }}
      />
    </Stack>
  );
};

export default memo(HeaderSection);
