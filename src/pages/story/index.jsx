import { useEffect } from 'react';

import Navbar from '@/components/Navbar/Navbar';
import Head from '@/components/Head/Head';
import Footer from '@/components/Footer/Footer';
import StoryDetail from '@/components/StoryDetail/StoryDetail';
import DefaultLayout from '@/components/Layout/DefaultLayout/DefaultLayout';
import Container from '@/components/Layout/Container/Container';

function Story() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <Navbar />
      <DefaultLayout>
        <Container isBackgroundVisible shouldApplyPadding>
          <StoryDetail />
        </Container>
      </DefaultLayout>
      <Footer />
    </>
  );
}

export default Story;
