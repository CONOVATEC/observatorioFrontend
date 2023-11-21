import { memo, useEffect, useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Posts } from '../../types';
import ListPosts from '../../components/ListPosts';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import Pagination from './../../components/Pagination/index';
import Link from 'next/link';

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

  const [categoryFilter, setCategoryFilter] = useState<Posts[]>([]);

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
    let auxNews =
      categorySelected === 0
        ? lastNewsData?.data
        : lastNewsData?.data.filter(
          (row: any) =>
            row.categoryId === categorySelected && row.news_cover === 'cover'
        );

    setCategoryFilter(auxNews);
  }, [categorySelected, lastNewsData]);

  return (
    <Stack as='section'>
      <Heading
        as='h3'
        size='lg'
        width='80%'
        px='15px'
        mx='auto'
        mt={8}
        sx={{
          textAlign: 'start',
        }}
      >
        Últimas noticias
      </Heading>
      <ListPosts data={lastNewsData?.data?.slice(0, 3)} isLoading={isLoading} />
      <Flex
        alignItems='center'
        justifyContent='center'
        gap={3}
        wrap={'wrap'}
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
            borderRadius='3xl'
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
      <ListPosts data={categoryFilter?.slice(0, 3)} isLoading={isLoading} />
      {!isLoading && categoryFilter?.length > 3 && (
        <Button
          sx={{ mx: 'auto', mb: 5 }}
          w={{ base: '80%', sm: '20%' }}
          colorScheme='brand'
          _dark={{
            bg: '#2D3748',
            color: 'white',
            border: '1px solid #2D3748',
          }}
          as={Link}
          href={{
            pathname: '/listing/[category]',
            query: { category: categories[categorySelected].name },
          }}
        >
          Ver más
        </Button>
      )}
    </Stack>
  );
};

export default memo(NewsSection);
