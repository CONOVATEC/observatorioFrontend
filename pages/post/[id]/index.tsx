import { Box, CircularProgress, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import DefaultLayout from '../../../src/views/DefaultLayout';

import styles from './styles.module.css';
import fetcher from '../../../src/utils/fetcher';
import useSWR from 'swr';
import { relative } from 'path';

export default function Post() {
  const { query } = useRouter();
  const {
    data: response,
    error,
    isLoading,
  } = useSWR(`/api/post/${query.id}`, fetcher);
  const data = response?.data ?? false;

  if (error || (data === false && !isLoading)) {
    return <>Error a cargar Post</>;
  }

  const backgroundImage =
    'url(https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png)';

  return (
    <DefaultLayout>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Flex
            w={'full'}
            h={{ base: '50vh', md: '70vh', lg: '80vh' }}
            backgroundImage={data.url_image || backgroundImage}
            backgroundSize={{ base: 'cover', md: '100% 100%' }}
            backgroundPosition={'center left'}
            position={'relative'}
          >
            <div className={styles.postShadow}>
              <Box className={styles.postHeader}>
                <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
                <p>{data.extract}</p>
              </Box>
            </div>
          </Flex>

          <Box
            className={styles.postContainer}
            dangerouslySetInnerHTML={{
              __html: data.content,
            }}
          />
        </>
      )}
    </DefaultLayout>
  );
}
