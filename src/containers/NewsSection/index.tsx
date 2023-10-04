import { memo, useEffect, useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Posts } from '../../types';
import ListPosts from '../../components/ListPosts';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import Pagination from './../../components/Pagination/index';

const NewsSection = () => {
  const {
    data: lastNewsData,
    error,
    isLoading,
  } = useSWR('/api/posts', fetcher);

  const { data: categoriesData, error: errorCategories } = useSWR(
    '/api/categories',
    fetcher
  );

  const [categorySelected, setCatergorySelected] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<Posts[][]>([]);

  const handlerCategorySelected = (id: number) => {
    setCatergorySelected(id);
  };

  let categories = [
    {
      id: 0,
      name: 'Todos',
      description: '',
    },
    ...(categoriesData?.data ?? []),
  ];

  useEffect(() => {
    setPage(1);
    if (lastNewsData?.data) {
      const categoryPerPage = [];
      let auxNews =
        categorySelected === 0
          ? lastNewsData.data
          : lastNewsData.data.filter(
            (row: any) => row.categoryId === categorySelected
          );

      for (let i = 0; i < auxNews?.length; i += 3) {
        categoryPerPage.push(auxNews?.slice(i, i + 3));
      }

      setCategoryFilter(categoryPerPage);
    }
  }, [lastNewsData, categorySelected]);

  return (
    <Stack as='section' padding='30px'>
      <Heading as='h3' size='lg'>
        Últimas noticias
      </Heading>
      <ListPosts data={lastNewsData?.data?.slice(0, 3)} isLoading={isLoading} />
      <Flex
        alignItems='center'
        justifyContent='center'
        gap={3}
        direction={{ base: 'column', sm: 'row' }}
      >
        {categories.map((e: any) => (
          <Button
            key={e.id}
            variant={categorySelected === e.id ? 'solid' : 'outline'}
            onClick={() => {
              handlerCategorySelected(e.id!);
            }}
            colorScheme='brand'
            borderRadius={'3xl'}
            _dark={{
              bg: categorySelected === e.id ? '#2D3748' : undefined,
              color: 'white',
              border: '1px solid #2D3748',
            }}
          >
            {e.name}
          </Button>
        ))}
      </Flex>
      <ListPosts data={categoryFilter[page - 1]} isLoading={isLoading} />
      <Pagination
        totalPosts={categoryFilter.flat().length}
        postsPerPage={3}
        currentPage={page}
        setPage={setPage}
      />
    </Stack>
  );
};

export default memo(NewsSection);
