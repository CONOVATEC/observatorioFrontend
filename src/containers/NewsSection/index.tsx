import { memo, useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useGetPostsApiQuery } from '../../redux/posts/slice';
import { Button } from '@chakra-ui/react';
import { PostFilter } from '../../types';
import ListPosts from '../../components/ListPosts';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const NewsSection = () => {
  const [categorySelected, setCatergorySelected] = useState<number | null>(
    null
  );

  const {
    data: lastNewsData,
    error,
    isLoading: loadingLastNews,
  } = useSWR('/api/posts', fetcher);

  const { data: categoriesData, error: errorCategories } = useSWR(
    '/api/categories',
    fetcher
  );

  const handlerCategorySelected = (id: number) => {
    setCatergorySelected(id);
  };

  console.log({ categorySelected });

  let lastNews = lastNewsData?.data?.slice(0, 3) ?? [];

  let newsOfCategory = lastNewsData?.data ?? [];

  let categories = categoriesData?.data ?? [];

  if (categorySelected) {
    newsOfCategory = newsOfCategory.filter(
      (row: any) => row.categoryId === categorySelected
    );
  }

  return (
    <Stack as='section' padding='30px'>
      <Heading as='h3' size='lg'>
        Últimas noticias
      </Heading>
      <ListPosts data={lastNews} isLoading={loadingLastNews} />
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
      <ListPosts
        data={newsOfCategory.slice(0, 3)}
        isLoading={loadingLastNews}
      />
    </Stack>
  );
};

export default memo(NewsSection);
