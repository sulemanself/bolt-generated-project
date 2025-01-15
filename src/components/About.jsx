import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
`;

const AboutCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Shape = styled(motion.div)`
  position: absolute;
  opacity: 0.1;
`;

function About() {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutTitle>About Me</AboutTitle>
          <AboutText>
            I'm a passionate web developer and designer with a keen eye for creating beautiful, functional, and user-friendly websites. With over 5 years of experience in the industry, I've had the pleasure of working with a diverse range of clients, from startups to established businesses. My approach combines creativity with technical expertise to deliver solutions that not only look great but also perform exceptionally well.
          </AboutText>
        </AboutCard>
      </div>
      <Shape
        as={motion.div}
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '40px solid #FFA500',
          top: '-50px',
          left: '-50px',
        }}
      />
      <Shape
        as={motion.div}
        animate={{
          rotate: -360,
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: '#4169E1',
          bottom: '-30px',
          right: '-30px',
        }}
      />
    </AboutSection>
  );
}

export default About;
