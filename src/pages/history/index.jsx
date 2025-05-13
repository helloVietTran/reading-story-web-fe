import { useEffect } from 'react';

import Head from '@/components/Head/Head';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ReadingHistory from '@/components/ReadingHistory/ReadingHistory';

function History() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />

      <NavBar />
      <ReadingHistory />
      <Footer />
    </>
  );
}

export default History;
