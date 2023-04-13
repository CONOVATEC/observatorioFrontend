import {
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Card,
  CircularProgress,
  Box,
  baseTheme,
} from '@chakra-ui/react';
import { useGetInfoCmpjQuery } from '../../redux/aboutCmpj/slice';
import { useMemo } from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import YoutubePlayer from '../../components/YoutubePlayer';
import InstanceCmpj from '../../components/InstanceCmpj';

const socialIcons = [
  { name: <FaFacebook />, href: 'https://www.facebook.com/CMPJOficial' },
  { name: <FaTiktok />, href: '' },
  { name: <FaLinkedinIn />, href: '' },
];

function BannerCmpjSection() {
  const { data, isLoading, error } = useGetInfoCmpjQuery(null);
  const cmpjData = useMemo(() => {
    const [firstItem] = [data?.data];
    return firstItem;
  }, [data]);

  const [firstValue] = cmpjData ?? [];
  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Stack
            flexDirection={{ base: 'column', md: 'row' }}
            gap={'1rem'}
            p={'1.5rem'}
          >
            <YoutubePlayer link={firstValue?.link_video} />
            <Stack width={'100%'}>
              <Text fontWeight={'bold'} fontSize={'2xl'}>
                {firstValue?.title}
              </Text>
              <Text>{firstValue?.description}</Text>
              <Stack
                flexDirection={{ base: 'column', md: 'row' }}
                flexWrap='wrap'
                justifyContent='center'
                alignItems={{ base: 'center', md: 'end' }}
              >
                <Image
                  boxSize='200px'
                  objectFit='cover'
                  height='100%'
                  alt='logo cmpj'
                  src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671317038/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/logo_cmpj_vezma4.png'
                />

                <Stack
                  color='black'
                  flexDirection={{ base: 'row', md: 'row' }}
                  alignItems={'end'}
                  gap={'1rem'}
                  fontSize='1.5rem'
                  pb={8}
                >
                  {socialIcons.map(({ name, href }, index) => (
                    <Link key={`social-index${index}`} href={href}>
                      {name}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <InstanceCmpj
            title_assembly={firstValue.title_assembly}
            description_assembly={firstValue.description_assembly}
            title_directive={firstValue.title_directive}
            description_directive={firstValue.description_directive}
          />
        </>
      )}
    </Box>
  );
}

export default BannerCmpjSection;
