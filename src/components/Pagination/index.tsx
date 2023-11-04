import React, { Dispatch, SetStateAction } from 'react';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

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

  if (totalPages <= 1) {
    return <></>;
  }

  return (
    <Flex align='center' justify='center' mb={8} gap={3}>
      <IconButton
        variant={currentPage === 1 ? 'solid' : 'outline'}
        isDisabled={currentPage === 1}
        colorScheme='brand'
        aria-label='Next Page'
        icon={<ChevronLeftIcon />}
        onClick={() => setPage(currentPage - 1)}
        _dark={{
          bg: currentPage === 1 ? '#2D3748' : undefined,
          color: 'white',
        }}
        fontSize={'3xl'}
      />
      {totalPages <= 7 &&
        pageNumbers.map((page, i) => (
          <Button
            variant={'outline'}
            key={page}
            colorScheme={page === currentPage ? 'brand' : undefined}
            onClick={() => setPage(page)}
            fontWeight={'bold'}
          >
            {page}
          </Button>
        ))}
      {totalPages > 7 && (
        <>
          {pageNumbers.slice(0, 1).map((page) => (
            <Button
              variant='outline'
              key={page}
              colorScheme={page === currentPage ? 'brand' : undefined}
              onClick={() => setPage(page)}
              fontWeight={'bold'}
            >
              {page}
            </Button>
          ))}
          {currentPage >= 5 && (
            <Button isDisabled fontSize={'3xl'}>
              ...
            </Button>
          )}
          {currentPage < 5 &&
            pageNumbers.slice(1, 5).map((page) => (
              <Button
                variant='outline'
                key={page}
                colorScheme={page === currentPage ? 'brand' : undefined}
                onClick={() => setPage(page)}
                fontWeight={'bold'}
              >
                {page}
              </Button>
            ))}
          {currentPage >= 5 &&
            currentPage < totalPages - 3 &&
            pageNumbers.slice(0, 3).map((_, index) => (
              <Button
                variant='outline'
                key={index}
                colorScheme={
                  currentPage + (index - 1) === currentPage
                    ? 'brand'
                    : undefined
                }
                onClick={() => setPage(currentPage + (index - 1))}
                fontWeight={'bold'}
              >
                {currentPage + (index - 1)}
              </Button>
            ))}

          {currentPage < totalPages - 3 && (
            <Button isDisabled fontSize={'3xl'}>
              ...
            </Button>
          )}
          {currentPage > totalPages - 4 &&
            pageNumbers.slice(-5, -1).map((page, index) => (
              <Button
                variant='outline'
                key={index}
                colorScheme={page === currentPage ? 'brand' : undefined}
                onClick={() => setPage(page)}
                fontWeight={'bold'}
              >
                {page}
              </Button>
            ))}
          {pageNumbers.slice(-1).map((page) => (
            <Button
              variant='outline'
              key={page}
              colorScheme={page === currentPage ? 'brand' : undefined}
              onClick={() => setPage(page)}
              fontWeight={'bold'}
            >
              {page}
            </Button>
          ))}
        </>
      )}
      <IconButton
        variant={currentPage === totalPages ? 'solid' : 'outline'}
        isDisabled={currentPage === totalPages}
        colorScheme='brand'
        aria-label='Next Page'
        icon={<ChevronRightIcon />}
        onClick={() => setPage(currentPage + 1)}
        _dark={{
          bg: currentPage === totalPages ? '#2D3748' : undefined,
          color: 'white',
        }}
        fontSize={'3xl'}
      />
    </Flex>
  );
};

export default Pagination;
