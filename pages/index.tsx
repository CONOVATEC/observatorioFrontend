import { memo } from 'react';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../src/views/DefaultLayout'
import FunctionsSection from '../src/containers/FunctionsSection';
import TematicsSection from '../src/containers/TematicsSection';
import LogosSection from '../src/containers/LogosSection';
import HeaderSection from '../src/containers/HeaderSection';
import PowerBISection from '../src/containers/PowerBISection';
import { Stack } from '@chakra-ui/react';

export default memo(function Home() {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <HeaderSection />
        <Stack as='main' gap={50}>
          <LogosSection />
          <FunctionsSection />
          <TematicsSection />
          <PowerBISection />
        </Stack>
      </DefaultLayout>
    </div>
  );
})
