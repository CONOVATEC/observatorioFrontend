import React, { Dispatch, SetStateAction } from 'react';
import { Flex, Button, Select, Text, ButtonGroup } from '@chakra-ui/react';

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(event.target.value));
  };

  return (
    <Flex align='center' justify='center' mt={4}>
      <ButtonGroup size='sm' isAttached>
        {currentPage > 1 && (
          <Button colorScheme='blue' onClick={() => setPage(currentPage - 1)}>
            Anterior
          </Button>
        )}
        <Select
          value={currentPage}
          onChange={handlePageChange}
          width='auto'
          variant='outline'
          marginX={2}
          size='sm'
        >
          {pageNumbers.map((pageNumber) => (
            <option key={pageNumber} value={pageNumber}>
              {pageNumber}
            </option>
          ))}
        </Select>
        {currentPage < totalPages && (
          <Button
            size='sm'
            colorScheme='blue'
            onClick={() => setPage(currentPage + 1)}
          >
            Siguiente
          </Button>
        )}
      </ButtonGroup>
      <Text ml={4}>
        Página {currentPage} de {totalPages}
      </Text>
    </Flex>
  );
};

export default Pagination;
