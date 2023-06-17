import React from 'react'
import {
  Card,
  CardBody,
  CircularProgress,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Posts } from '../../types';

interface ListPostsProps {
  data: Posts[]
  isLoading: Boolean
}

const defaultImg = "https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png"

const ListPosts = ({ data, isLoading }: ListPostsProps) => {
  const grid = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <>
      { isLoading ? (
        <Grid templateColumns={grid} gap={6} p="15px">
          <GridItem w="100%">
            <Skeleton height='250px' />
          </GridItem>
          <GridItem w="100%">
            <Skeleton height='250px' />
          </GridItem>
          <GridItem w="100%">
            <Skeleton height='250px' />
          </GridItem>
        </Grid>
      ) : (
        <Grid templateColumns={grid} gap={6} p="15px">
          {data
            ?.map((item: Posts, index: number) => {
              const { title, id, extract, user, created_at, url_image } = item;
              return (
                <GridItem key={id} w="100%">
                  <Link
                    key={`post-${index}`}
                    href={{
                      pathname: "/post/[id]",
                      query: { id },
                    }}
                  >
                    <Card h="100%">
                      <CardBody>
                        <Image
                          src={url_image || defaultImg }
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                          <Text fontSize="sm">{`${user.name} | ${created_at}`}</Text>
                          <Heading size="md">{title}</Heading>
                          <Text>{extract}</Text>
                        </Stack>
                      </CardBody>
                    </Card>
                  </Link>
                </GridItem>
              );
            })}
        </Grid>
      )}
    </>
  );
}

export default ListPosts