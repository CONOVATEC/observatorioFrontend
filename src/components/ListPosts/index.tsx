import React from 'react';
import {
  Card,
  CardBody,
  Grid,
  GridItem,
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
    <>
      {isLoading ? (
        <Grid
          templateColumns='repeat(auto-fill, minmax(200px,400px))'
          autoColumns='1fr'
          gap={6}
          p='15px'
          w='85%'
          alignSelf='center'
          placeContent='center'
        >
          <GridItem w='100%'>
            <Skeleton height='400px' />
          </GridItem>
          <GridItem w='100%'>
            <Skeleton height='400px' />
          </GridItem>
          <GridItem w='100%'>
            <Skeleton height='400px' />
          </GridItem>
        </Grid>
      ) : (
        <Grid
          gap={6}
          p='15px'
          w='80%'
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          autoRows='auto'
          autoFlow='dense'
          mx='auto'
        >
          {data?.map((item: Posts, index: number) => {
            const { title, id, extract, user, created_at, url_image } = item;
            return (
              <GridItem key={id} w='100%' maxW='482px'>
                <Card
                  as={Link}
                  h='100%'
                  key={`post-${id}`}
                  href={{
                    pathname: '/post/[id]',
                    query: { id },
                  }}
                >
                  <CardBody>
                    <Image
                      src={url_image || defaultImg}
                      alt={title}
                      borderRadius='lg'
                      maxH='400px'
                      w='100%'
                      h={{ sm: 'auto', md: '230px', lg: '270px' }}
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
              </GridItem>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ListPosts;
