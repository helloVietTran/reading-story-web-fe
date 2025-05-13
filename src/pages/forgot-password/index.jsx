import React, { useEffect } from 'react';

import ForgotPassword from '@/components/ForgotPassword/ForgotPassword';
import Head from '@/components/Head/Head';
import NavBar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const ForgotPasswordPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head />

      <NavBar />
      <ForgotPassword />
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;
