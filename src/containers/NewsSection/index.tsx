import { memo, useMemo } from 'react'
import {
    Card,
    CardBody,
    CircularProgress, 
    Grid, 
    GridItem, 
    Heading, 
    Image, 
    Stack, 
    Text, 
    useBreakpointValue 
  } from '@chakra-ui/react';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useGetPostsApiQuery } from '../../redux/posts/slice';

const NewsSection = () => {
  const { data, isLoading}  = useGetPostsApiQuery(null)
  console.log('data', data)
  let grid = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  });

  return (
    <Stack as="section">
       <Heading as='h3' size='lg'> Noticias relacionadas</Heading>
      {isLoading && <CircularProgress />}
      {!isLoading &&
        <Grid templateColumns = { grid } gap={6}> 
        { data?.data
          ?.map( (item: any, index: number) => {
            const { title, id, extract, user, created } =  item;

            return (
              <GridItem key={id} w='100%'>
              <Link 
                key={`post-${index}`}
                href={{
                  pathname: '/post/[id]',
                  query: { id }
                }}>
                <Card h="100%">
                  <CardBody>
                    <Image
                      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                      alt='Green double couch with wooden legs'
                      borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontSize='sm'>{  `${ user.name } | ${ created }` }</Text>
                      <Heading size='md'>{ title }</Heading>
                      <Text>
                        { extract }
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Link>
              </GridItem>
            )
          })  
         } </Grid>}
    </Stack>
  )
}

export default memo(NewsSection);