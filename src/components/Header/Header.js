import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3,Div4, NavLink, SocialIcons, Span } from './HeaderStyles';
import { SectionDivider } from '../../styles/GlobalComponents';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/ ">
        <a style={{display:"flex", alignItems: "center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{padding:'0 2dvw'}}>
        <Link  href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{padding:'0 2dvw'}}>
        <Link   href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{padding:'0 2dvw'}}>
        <Link  href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div4>
      <li style={{padding:'0 2dvw'}}>
        <Link  href="#research">
          <NavLink>Research</NavLink>
        </Link>
      </li>
      
      <li style={{padding:'0 2dvw'}}>
        <Link  href="#publications">
          <NavLink>Publications</NavLink>
        </Link>
      </li>
    </Div4>
    <Div3>
      <SocialIcons href="https://github.com/Malav-P">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/malavp00/">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
    </Div3>


  </Container>
);

export default Header;
