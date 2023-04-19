import React from 'react';
import Typed from 'typed.js';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    
    <SectionText>
      Below are some projects and code I've worked on in my spare time. They range from numerical integration of ODEs to Convolutional Neural Networks.
    </SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard id={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Tools</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>

        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;