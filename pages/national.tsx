import Head from 'next/head';
import TimelineSection from '../src/containers/TimelineSection';
import DefaultLayout from '../src/views/DefaultLayout';
import { organizationName } from '../src/utils/constants';

function National() {
  return (
    <DefaultLayout>
      <Head>
        <title>{organizationName} - Política nacional de juventudes</title>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <TimelineSection />
    </DefaultLayout>
  );
}

export default National;
