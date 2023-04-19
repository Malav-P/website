import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './PublicationsStyles';
import { Section, SectionDivider, SectionTitle , SectionText} from '../../styles/GlobalComponents';
import { publications } from '../../constants/constants';

const Publications = () => (
    <Section nopadding id="publications">
      <SectionDivider/>
      <SectionTitle main>Publications</SectionTitle>
      <SectionText>
        Below you'll find my publications. My research combines optimization theory with space systems application.
      </SectionText>
      <GridContainer>
        {publications.map(({year, title, description, image, paper, source, id}) => (
          <BlogCard id={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={paper}>Paper</ExternalLinks>
              <ExternalLinks href={source}>Source Code</ExternalLinks>
            </UtilityList>
  
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
  
  export default Publications;