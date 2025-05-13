import { useEffect } from 'react';

import Head from '@/components/Head/Head';
import NavBar from '@/components/Navbar/Navbar';
import Register from '@/components/Register/Register';
import Footer from '@/components/Footer/Footer';

function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />
      <NavBar />
      <Register />
      <Footer />
    </>
  );
}

export default RegisterPage;
