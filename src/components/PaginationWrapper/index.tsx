import Pagination from 'rc-pagination';
import { Flex } from '@chakra-ui/react';

interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (current: number) => void;
}

export const PaginationWrapper: React.FC<PaginationProps> = ({
	total,
	pageSize,
	current,
	onChange,
}) => {
	return (
		<Flex justify='space-evenly' gap='2'>
			<Pagination
				total={total}
				pageSize={pageSize}
				current={current}
				onChange={onChange}
			/>
		</Flex>
	);
};
