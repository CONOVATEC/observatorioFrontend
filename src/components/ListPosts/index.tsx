import React from 'react';
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Posts } from '../../types';

interface ListPostsProps {
  data: Posts[];
  isLoading: Boolean;
}

const defaultImg =
  'https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png';

const ListPosts = ({ data, isLoading }: ListPostsProps) => {
  return (
    <Flex
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      w='80%'
      mx='auto'
      gap={5}
      my={5}
    >
      {isLoading ? (
        <>
          <Skeleton
            height='400px'
            w={{ sm: '80vw', md: '45%', lg: '30%' }}
            alignSelf={'flex-start'}
            mx='auto'
          />
          <Skeleton
            height='400px'
            w={{ sm: '80vw', md: '45%', lg: '30%' }}
            alignSelf={'flex-start'}
            mx='auto'
          />
          <Skeleton
            height='400px'
            w={{ sm: '80vw', md: '45%', lg: '30%' }}
            alignSelf={'flex-start'}
            mx='auto'
          />
        </>
      ) : (
        data?.map((item: Posts) => {
          const { title, id, extract, user, created_at, url_image } = item;
          return (
            <Card
              as={Link}
              href={{
                pathname: '/post/[id]',
                query: { id },
              }}
              key={`post-${id}`}
              w={{ sm: '80vw', md: '45%', lg: '30%' }}
            >
              <CardBody>
                <Image
                  src={url_image || defaultImg}
                  alt={title}
                  borderRadius='lg'
                  maxH='400px'
                  w='100%'
                  display={'flex'}
                  h={{ sm: 'auto', md: '230px', lg: '300px' }}
                  objectFit='cover'
                />
                <Stack mt='6' spacing='3'>
                  <Text fontSize='sm'>{`${user.name} | ${created_at}`}</Text>
                  <Heading size='md'>{title}</Heading>
                  <Text
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    maxWidth='100%'
                  >
                    {extract}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          );
        })
      )}
    </Flex>
  );
};

export default ListPosts;
