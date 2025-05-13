import { useEffect } from 'react';
import NavBar from '@/components/Navbar/Navbar';
import Head from '@/components/Head/Head';
import Footer from '@/components/Footer/Footer';
import UserDetail from '@/components/UserDetail/UserDetail';

function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head />

      <NavBar />
      <UserDetail />
      <Footer />
    </>
  );
}

export default UserPage;
