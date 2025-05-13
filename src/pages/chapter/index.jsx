import { useEffect } from 'react';

import NavBar from '@/components/Navbar/Navbar';
import Head from '@/components/Head/Head';
import Footer from '@/components/Footer/Footer';
import ChapterDetail from '@/components/ChapterDetail/ChapterDetail';

function Chapter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head />
      <NavBar isPreventFixed={true} />
      <ChapterDetail />
      <Footer />
    </>
  );
}

export default Chapter;
