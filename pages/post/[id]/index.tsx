import { Box, CircularProgress, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaLaptopHouse } from 'react-icons/fa';
import CustomHero from '../../../src/containers/CustomHero';
import { useGetPostsApiQuery } from '../../../src/redux/posts/slice';
import DefaultLayout from '../../../src/views/DefaultLayout';
import styles from './styles.module.css'

export default function Post(){
  const { query } = useRouter()

  const { data, isLoading } = useGetPostsApiQuery(null)

  const postBody = (data?.data as Array<any>)
    ?.find(({ id }) => String(id) === String(query.id))
    ?.content ?? 'No pudimos ecnotar el post que buscas'
  
  return(
    <DefaultLayout>
      {isLoading && <CircularProgress />}
      {!isLoading && 
        <Box>
          <CustomHero existButton={ false }/>
          <Box className={styles.postContainer} 
          dangerouslySetInnerHTML={{
            __html: postBody
          }} >
          </Box>
      </Box>
      }
    </DefaultLayout>
  )

}
