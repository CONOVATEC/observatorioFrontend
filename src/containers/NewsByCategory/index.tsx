import {
	Grid,
	useBreakpointValue,
	Link,
	Text,
	Image,
	Card,
	CardBody,
	Stack,
	Heading,
	GridItem,
	Button,
	Box,
} from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { PaginationWrapper } from '../../components/PaginationWrapper';
interface PokemonInfo {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
    };
  };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
}

interface PokemonCardProps {
  url: string;
}
export const Cards: React.FC<PokemonCardProps> = ({ url }) => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);

	useEffect(() => {
		const obtenerInfoPokemon = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setPokemonInfo(data);
			} catch (error) {
				console.log(error);
			}
		};

		obtenerInfoPokemon();
	}, [url]);

	if (!pokemonInfo) {
		return null;
	}
	return (
		<Link h='400' sx={{ '&:hover': { textDecoration: 'none' } }}>
			<Card h='100%'>
				<CardBody p='20px' h='100%'>
					<Image
						borderRadius='lg'
						src={
							pokemonInfo.sprites.other.dream_world.front_default ||
              pokemonInfo.sprites.other.home.front_default
						}
						alt={pokemonInfo.name}
						h='40%'
					/>
					<Stack mt='6' spacing={3}>
						<Text fontSize={'sm'}>Autor | dd-MM-yyyy</Text>
						<Heading size='md'>Titulo Noticia</Heading>
						<Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              officia qui velit corrupti. Reprehenderit dolor sequi vitae ab, id
              dolore quas sed enim quisquam sint! Consectetur earum assumenda
              impedit deleniti.
						</Text>
					</Stack>
				</CardBody>
			</Card>
		</Link>
	);
};

interface Pokemon {
  name: string;
  url: string;
}

export const NewsByCategory = () => {
	const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
	const [numberItems, setNumberItems] = useState(0);
	const pageSize = 12;
	const [offset, setOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handlePageChange = (current: number) => {
		const newOffset = (current - 1) * pageSize;
		setOffset(newOffset);
	};

	const comlumnCount = useBreakpointValue({ base: 1, sm: 2, md: 3 });
	useEffect(() => {
		const obtenerPokemones = async () => {
			try {
				const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`;
				const response = await fetch(url);
				const json = await response.json();
				setNumberItems(json.count);
				setPokemonData(json.results);
			} catch (error) {
				console.log(error);
			}
		};
		obtenerPokemones();
		setCurrentPage(offset / pageSize + 1);
	}, [offset]);

	return (
		<GridItem maxW='1280' w='100%' m='0 auto' p='2'>
			<Grid
				templateColumns={`repeat(${comlumnCount},minmax(0,1fr))`}
				gap={6}
				p='2'
			>
				{pokemonData.map((pokemon) => (
					<Cards key={pokemon.name} url={pokemon.url} />
				))}
			</Grid>
			<PaginationWrapper
				total={numberItems}
				pageSize={pageSize}
				current={currentPage}
				onChange={handlePageChange}
			/>
		</GridItem>
	);
};

export default memo(NewsByCategory);
