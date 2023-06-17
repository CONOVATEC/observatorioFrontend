import { memo, useState } from 'react';
import {
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { useGetPostsApiQuery } from '../../redux/posts/slice';
import { Button } from '@chakra-ui/react'
import { PostFilter } from '../../types';
import ListPosts from '../../components/ListPosts';


const categoryButtons = [
  { id: 1, category: 'Tecnología' },
  { id: 2, category: 'Educación' },
  { id: 3, category: 'Politica' },
  { id: 4, category: 'Nacionales' },
  { id: 5, category: 'Internacionales' }
]

const NewsSection = () => {
  const [clickedButton, setClickedButton] = useState<number|null>(1);
  const [selectedCategory, setSelectedCategory] = useState<PostFilter | undefined>({ category: categoryButtons[0].category });
  
  const { data: lastNews, isLoading: loadingLastNews } = useGetPostsApiQuery(undefined);
  
  //const { data, isLoading } = useGetPostsApiQuery(selectedCategory);

  const handleClick = (id: number, category: string) => {
    setClickedButton(id);
    setSelectedCategory({category});
  };

  return (
    <Stack as='section' padding="30px">
      <Heading as='h3' size='lg'>
        Últimas noticias
      </Heading>
      <ListPosts data={lastNews?.data} isLoading={loadingLastNews} />
      <Flex
        alignItems='center'
        justifyContent="center"
        flexWrap='wrap'
        width='100%' 
        gap='15px'
        p="20px"
      >
        {categoryButtons.map((e) => (
          <Button
            key={e.id}
            variant={clickedButton === e.id ? 'solid' : 'outline'}
            onClick={() => handleClick(e.id, e.category)}
            colorScheme='brand'
            borderRadius={'3xl'}
            width={{ base: '90%', sm: 'max-content' }}
            _dark={{
              bg: clickedButton === e.id ? '#2D3748' : undefined,
              color: clickedButton === e.id ? 'white' : undefined,
              border: "1px solid #2D3748"
            }}
          >
            {e.category}
          </Button>
        ))}
      </Flex>
      //cambiar data por lastNews?.data cuando esté el filtro de category
      <ListPosts data={lastNews?.data} isLoading={loadingLastNews} />
    </Stack>
  );
};

export default memo(NewsSection);
