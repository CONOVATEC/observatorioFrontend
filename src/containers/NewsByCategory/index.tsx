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
} from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
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
		<Link h='400' sx={{'&:hover': { textDecoration: 'none' } }}>
			<Card h='100%'>
				<CardBody p='20px'>
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
						<Text fontSize={'md'}>{pokemonInfo.name}</Text>
						<Heading size={'15'}>TextoNormalon</Heading>
						{pokemonInfo.abilities.map((ability) => (
							<Text fontSize='sm' key={ability.ability.name}>
								{ability.ability.name}
							</Text>
						))}
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
	}, [offset]);

	return (
		<GridItem maxW='1280' w='100%' m='0 auto'>
			<Grid
				templateColumns={`repeat(${comlumnCount},minmax(0,1fr))`}
				gap={6}
				p='2'
			>
				{pokemonData.map((pokemon) => (
					<Cards key={pokemon.name} url={pokemon.url} />
				))}
			</Grid>
		</GridItem>
	);
};

export default memo(NewsByCategory);
