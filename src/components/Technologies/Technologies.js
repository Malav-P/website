import React from 'react';
import {SiCplusplus, SiC, SiPython, SiReact, SiNextdotjs, SiCmake, SiAnaconda, SiNvidia} from 'react-icons/si';
import { Icon } from '@iconify/react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a variety of languages and packages while exploring and building.
    </SectionText>

    <List main>
      <ListItem>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <List>
            <ListItem><SiCplusplus size="3rem"/></ListItem>
            <ListItem><SiC size="3rem"/></ListItem>
            <ListItem><Icon icon="skill-icons:matlab-light" width="32" height="32" /></ListItem>
            <ListItem><SiPython size="3rem"/></ListItem>
            <ListItem><SiNvidia size="3rem"/></ListItem>
          </List>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <List>
            <ListItem><SiReact size="3rem"/></ListItem>
            <ListItem><SiNextdotjs size="3rem"/></ListItem>
          </List>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <List>
            <ListItem><SiAnaconda size="3rem"/></ListItem>
            <ListItem><SiCmake size="3rem"/></ListItem>
          </List>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
