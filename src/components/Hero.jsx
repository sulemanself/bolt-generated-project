import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 1;
`;

const WelcomeText = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const ProfessionalTitle = styled(motion.h2)`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const ClientsInfo = styled(motion.div)`
  margin-bottom: 40px;
`;

const CTAButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 15px 30px;
`;

const Shape = styled(motion.div)`
  position: absolute;
  opacity: 0.7;
`;

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

function Hero() {
  return (
    <HeroSection id="home">
      <HeroContent>
        <WelcomeText
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm [Your Name]!
        </WelcomeText>
        <ProfessionalTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Web Developer & Designer
        </ProfessionalTitle>
        <ClientsInfo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          80+ Happy Clients
        </ClientsInfo>
        <CTAButton
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </CTAButton>
      </HeroContent>
      <Shape
        as={motion.div}
        animate={floatingAnimation}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#FFA500',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          top: '20%',
          left: '10%',
        }}
      />
      <Shape
        as={motion.div}
        animate={floatingAnimation}
        style={{
          width: '80px',
          height: '120px',
          backgroundColor: '#4169E1',
          borderRadius: '40px',
          top: '60%',
          right: '15%',
        }}
      />
      <Shape
        as={motion.div}
        animate={floatingAnimation}
        style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#98FF98',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          bottom: '15%',
          left: '20%',
        }}
      />
    </HeroSection>
  );
}

export default Hero;
