import {
  Box, Card,
  CardBody, Divider,
  Heading, Flex,
  Image, Stack,
  Text, useBreakpointValue, useColorModeValue,
} from '@chakra-ui/react';
import { memo } from 'react';
import Slider from 'react-slick';
// import ResponsiveGalleryWithCarousel from '../../views/ResponsiveGalleryWithCarousel';
import { data_cards } from './config';

interface SectionInfoProps {
  title: string;
  image: string;
  alt_image: string;
  content_body: string;
}

const CardInfo = ({ title, image, content_body, alt_image }: SectionInfoProps) => {
  const color = useColorModeValue('white','gray.800');
  return (
    <Card maxW={'250px'} mb={10} rounded={0}>
      <CardBody bg={color}>
        <Image src={image} alt={alt_image} borderRadius="lg" boxSize="100px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text size="xs">{content_body} </Text>
        </Stack>
      </CardBody>
      <Box bg="purple.500" h="5px" />
      <Divider />
    </Card>
  );
};

const SectionFirstCarousel = () => {
  return (
    <Flex justify={'space-around'} px={useBreakpointValue({ base: 4, md: 8 })} position={'relative'} top={'-24'} zIndex={80}>
        {data_cards.map((data_card, index) => (
        // <ResponsiveGalleryWithCarousel data={data_card} key={`card-carousel-first-${index}`}/>
          <CardInfo {...data_card} key={`card-carousel-first-${index}`} />
        ))}
    </Flex>
  );
};

export default memo(SectionFirstCarousel);
  