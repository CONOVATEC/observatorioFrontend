import { memo, useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardBody,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useGetPostsApiQuery } from '../../redux/posts/slice';
import { Button } from '@chakra-ui/react'

const categoryButtons = [
  { id: 1, category: 'Tecnología' },
  { id: 2, category: 'Educación' },
  { id: 3, category: 'Politica' },
  { id: 4, category: 'Nacionales' },
  { id: 5, category: 'Internacionales' }
]

const NewsSection = () => {
  const { data, isLoading } = useGetPostsApiQuery(undefined);
  const grid = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
  });

  const [clickedButton, setClickedButton] = useState<number|null>(1);

  const handleClick = (id: number, category: string) => {
    setClickedButton(id);
  };

  return (
    <Stack as='section'>
      <Heading as='h3' size='lg'>
        {' '}
        Noticias relacionadas
      </Heading>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Grid templateColumns={grid} gap={6}>
            {data?.data
              ?.filter(({ status }: { status: boolean }) => status)
              ?.map((item: any, index: number) => {
                const { title, id, extract, user, created } = item;

                return (
                  <GridItem key={id} w='100%'>
                    <Link
                      key={`post-${index}`}
                      href={{
                        pathname: '/post/[id]',
                        query: { id },
                      }}
                    >
                      <Card h='100%'>
                        <CardBody>
                          <Image
                            src='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                          />
                          <Stack mt='6' spacing='3'>
                            <Text fontSize='sm'>{`${user.name} | ${created}`}</Text>
                            <Heading size='md'>{title}</Heading>
                            <Text>{extract}</Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    </Link>
                  </GridItem>
                );
              })}{' '}
          </Grid>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            width="100%" 
            gap="15px"
            mt="20px"
            mb="20px"
          >
            {categoryButtons.map((e) => (
              <Button
                key={e.id}
                variant={clickedButton === e.id ? "solid" : "outline"}
                onClick={() => handleClick(e.id, e.category)}
                colorScheme="brand"
                borderRadius={"3xl"}
                width={{ base: "90%", sm: "max-content" }}
              >
                {e.category}
              </Button>
            ))}
          </Flex>
        </>
      )}
    </Stack>
  );
};

export default memo(NewsSection);
