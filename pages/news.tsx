import Head from 'next/head';
import DefaultLayout from '../src/views/DefaultLayout';
import NewsByCategory from '../src/containers/NewsByCategory';

export default function news() {
	return (
		<DefaultLayout>
			<Head>
				<title>Noticias por categoria</title>
			</Head>
			<NewsByCategory />
		</DefaultLayout>
	);
}
