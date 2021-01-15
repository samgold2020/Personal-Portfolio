import React from 'react';
import {
  ProjectsContainer,
  ProjectCard,
} from './projects-style';

const projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard>
      <h1>This is a project component</h1>
      <h1>About the Project</h1>
      <h1>Link to the site</h1>
      </ProjectCard>
      <ProjectCard>

      <h1>This is a project component</h1>
      </ProjectCard>
      <ProjectCard>

      <h1>This is a project component</h1>
      </ProjectCard>
      
    </ProjectsContainer>
  )
}

export default projects;
