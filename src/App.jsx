import React from 'react';
import Article from './component/article/Article';
import Section from './component/article/Section';
import Sosial from './component/article/Sosial';
import Footer from './component/footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Discover from './component/article/Discover';
import FooterCopyright from './component/footer/FooterCopyright';

function App() {
  return (
    <>
      <Navbar />
      <Article />
      <Section />
      <Sosial />
      <Discover />
      <Footer />
      <FooterCopyright />
    </>
  );
}

export default App;
