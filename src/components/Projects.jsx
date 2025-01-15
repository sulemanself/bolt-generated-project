import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  background-color: #f9f9f9;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProjectCategory = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const projects = [
  { name: 'E-commerce Website', category: 'Web Design', image: 'https://via.placeholder.com/300x200.png?text=E-commerce+Website' },
  { name: 'Mobile App UI', category: 'UI/UX Design', image: 'https://via.placeholder.com/300x200.png?text=Mobile+App+UI' },
  { name: 'Blog Platform', category: 'Web Development', image: 'https://via.placeholder.com/300x200.png?text=Blog+Platform' },
  { name: 'Portfolio Website', category: 'Web Design', image: 'https://via.placeholder.com/300x200.png?text=Portfolio+Website' },
];

function Projects() {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectInfo>
                <ProjectName>{project.name}</ProjectName>
                <ProjectCategory>{project.category}</ProjectCategory>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}

export default Projects;
