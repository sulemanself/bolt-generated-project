import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import CallBooking from './components/CallBooking';

const AppContainer = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <CallBooking />
    </AppContainer>
  );
}

export default App;
