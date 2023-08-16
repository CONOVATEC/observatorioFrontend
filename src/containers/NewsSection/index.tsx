import { memo, useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useGetPostsApiQuery } from '../../redux/posts/slice';
import { Button } from '@chakra-ui/react';
import { PostFilter } from '../../types';
import ListPosts from '../../components/ListPosts';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';

const categoryButtons = [
  { id: null, category: 'Todos' },
  { id: 1, category: 'Tecnología' },
  { id: 2, category: 'Educación' },
  { id: 3, category: 'Politica' },
  { id: 4, category: 'Nacionales' },
  { id: 5, category: 'Internacionales' },
];

const NewsSection = () => {
  const [categorySelected, setCatergorySelected] = useState<number | null>(
    null
  );

  const {
    data: lastNewsData,
    error,
    isLoading: loadingLastNews,
  } = useSWR('/api/posts', fetcher);

  const handlerCategorySelected = (id: number) => {
    setCatergorySelected(id);
  };

  let lastNews = lastNewsData?.data?.slice(0, 3) ?? [];

  let newsOfCategory = lastNewsData?.data?.slice(0, 3) ?? [];

  if (categorySelected) {
    newsOfCategory = newsOfCategory.filter(
      (row: any) => row.category === categorySelected
    );
  }

  console.log({ lastNews, categorySelected });

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
        {categoryButtons.map((e) => (
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
            {e.category}
          </Button>
        ))}
      </Flex>
      <ListPosts data={newsOfCategory} isLoading={loadingLastNews} />
    </Stack>
  );
};

export default memo(NewsSection);
