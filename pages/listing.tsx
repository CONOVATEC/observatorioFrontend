import { CircularProgress, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { useGetPostsApiQuery } from '../src/redux/posts/slice';
import DefaultLayout from '../src/views/DefaultLayout';

export default function Listing() {
  const { data, isLoading}  = useGetPostsApiQuery(null)

  return (
    <DefaultLayout>
      {isLoading && <CircularProgress />}
      {!isLoading &&
        data?.data
          ?.map( (item: any, index: number) => {
            const { title, id} =  item 

            return (
              <Link 
                key={`post-${index}`}
                href={{
                  pathname: '/post/[id]',
                  query: { id }
                }}>
                <Text>{title}</Text>
              </Link>
            )
          })  
      }
    </DefaultLayout>
  )
}
