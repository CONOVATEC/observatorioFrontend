import { memo } from 'react';
import { Heading, HStack, Image, Stack, VStack } from '@chakra-ui/react';
import { tematicsByTwo } from '../../config';

const TematicsSection = () => {
  return (
    <Stack as='section' py={16}>
      <Heading textAlign='center' as='h2' size='lg'>
        Nuestras
      </Heading>
      <Heading textAlign='center' color='#9537D3C9' as='h2' size='xl'>
        Temáticas
      </Heading>
      <Stack
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        alignItems='center'
        gap={8}
        p={8}
      >
        {tematicsByTwo.map((tematicsByTwo, index) => {
          const [firstItem, secondItem] = tematicsByTwo;
          return (
            <HStack
              key={index}
              width='100%'
              justifyContent={{ base: 'space-evenly', md: 'space-around' }}
            >
              <VStack>
                <Image boxSize='75' alt={firstItem.title} src={firstItem.src} />
                <Heading as='h5' size='md' color='#9537D3C9' textAlign='center'>
                  {firstItem.title}
                </Heading>
              </VStack>
              <VStack>
                <Image
                  boxSize='75'
                  alt={secondItem.title}
                  src={secondItem.src}
                />
                <Heading as='h5' size='md' color='#9537D3C9' textAlign='center'>
                  {secondItem.title}
                </Heading>
              </VStack>
            </HStack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default memo(TematicsSection);
