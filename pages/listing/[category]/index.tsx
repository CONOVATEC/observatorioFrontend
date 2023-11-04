import { useEffect, useState } from 'react';
import DefaultLayout from '../../../src/views/DefaultLayout';
import { useRouter } from 'next/router';
import { Stack, Text } from '@chakra-ui/react';
import fetcher from '../../../src/utils/fetcher';
import useSWR from 'swr';
import { Posts } from '../../../src/types';
import ListPosts from '../../../src/components/ListPosts';
import Pagination from '../../../src/components/Pagination';

const ListingCategory = () => {
  const {
    data: lastNewsData,
    error,
    isLoading,
  } = useSWR('/api/posts', fetcher);

  const router = useRouter();
  const { category } = router.query;

  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<Posts[][]>([]);
  const dataByCategory =
    category === 'Todos'
      ? lastNewsData?.data
      : lastNewsData?.data?.filter(
        (row: any) => row.category?.name === category
      );

  useEffect(() => {
    const auxData = [];

    for (let i = 0; i < dataByCategory?.length; i += 9) {
      auxData.push(dataByCategory?.slice(i, i + 9));
    }

    setPosts(auxData);
  }, [page, lastNewsData]);

  return (
    <DefaultLayout>
      <Stack as='section'>
        <Text
          fontSize='4xl'
          sx={{
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
          mt={5}
        >
          {category}
        </Text>
        <ListPosts data={posts?.[page - 1]} isLoading={isLoading} />
        {!isLoading && (
          <Pagination
            totalPosts={dataByCategory.length}
            postsPerPage={9}
            currentPage={page}
            setPage={setPage}
          />
        )}
      </Stack>
    </DefaultLayout>
  );
};

export default ListingCategory;
