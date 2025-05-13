import { useEffect } from 'react';

import Head from '@/components/Head/Head';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FollowStory from '@/components/FollowingStory/FollowingStory';

function Following() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <NavBar />
      <FollowStory />
      <Footer />
    </>
  );
}

export default Following;
