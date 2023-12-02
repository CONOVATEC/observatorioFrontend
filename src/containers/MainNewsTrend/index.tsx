import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { memo } from 'react';

import fetcher from '../../utils/fetcher';
import useSWR from 'swr';
import Link from 'next/link';

const MainNewsTrend = () => {
  const { data } = useSWR('/api/posts', fetcher);

  const trend = data?.data
    ?.filter(
      (row: any) => row.news_cover === 'cover' && row.tendencia === 'trend'
    )
    .sort((a: any, b: any) => {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    })[0];

  const { url_image, title, extract, category, id } = trend ?? {};

  return (
    <Flex
      w={'full'}
      h={{ base: '50vh', md: '70vh', lg: '80vh' }}
      backgroundImage={`url(${url_image})`}
      backgroundSize={{ base: 'cover', md: '100% 100%' }}
      backgroundPosition={'center left'}
    >
      <VStack
        w={'full'}
        align={'left'}
        justify={'top'}
        padding={4}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            mt={6}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl', lg: '4xl' })}
          >
            {title}
          </Text>
          <Text
            color='white'
            fontWeight={300}
            lineHeight={1.2}
            maxW={{ base: '68%', lg: '100%' }}
            fontSize={useBreakpointValue({ base: 'sm', md: 'xl', lg: '2xl' })}
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              WebkitLineClamp: 10,
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            {extract}
          </Text>
          <Button
            bg={'purple.600'}
            as={Link}
            color={'black'}
            position={'static'}
            _hover={{ bg: 'whiteAlpha.500' }}
            size={useBreakpointValue({ base: 'xs', md: 'sm', lg: 'lg' })}
            href={{
              pathname: '/listing/[category]/[name]',
              query: { category: category?.name, name: title, id },
            }}
          >
            Más información
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default memo(MainNewsTrend);
