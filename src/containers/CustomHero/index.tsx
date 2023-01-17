import {
  Stack, Flex,
  Button, Text,
  VStack, useBreakpointValue,
} from '@chakra-ui/react';
import { memo } from 'react';

import { hero } from './config';

const { title, content, img_hero_url } = hero;
const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={{ base: '50vh', md: '70vh', lg: '80vh' }}
      backgroundImage={`url(${img_hero_url})`}
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
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl', lg: '4xl' })}
          >
            {title}
          </Text>
          <Stack direction={'row'} maxW={{ base: '68%', lg: '100%' }}>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'sm', md: 'xl', lg: '2xl' })}
            >
              {content}
            </Text>
          </Stack>
          <Stack direction={'row'}>
            <Button
              bg={'purple.600'}
              color={'black'}
              position={'static'}
              _hover={{ bg: 'whiteAlpha.500' }}
              size={useBreakpointValue({ base: 'xs', md: 'sm', lg: 'lg' })}
            >
              Más información
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default memo(Hero);
