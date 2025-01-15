import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StackSection = styled.section`
  background-color: white;
`;

const StackTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const StackCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StackIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const StackName = styled.h3`
  font-size: 1.2rem;
`;

const stackItems = [
  { name: 'Framer', icon: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
  { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
  { name: 'Notion', icon: 'https://www.vectorlogo.zone/logos/notion/notion-icon.svg' },
  { name: 'React', icon: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
  { name: 'Node.js', icon: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg' },
  { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
];

function Stack() {
  return (
    <StackSection id="stack">
      <div className="container">
        <StackTitle>My Stack</StackTitle>
        <StackGrid>
          {stackItems.map((item, index) => (
            <StackCard
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <StackIcon src={item.icon} alt={item.name} />
              <StackName>{item.name}</StackName>
            </StackCard>
          ))}
        </StackGrid>
      </div>
    </StackSection>
  );
}

export default Stack;
