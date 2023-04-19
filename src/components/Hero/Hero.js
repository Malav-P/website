import React, { useRef } from 'react';
import { useEffect, useReducer } from 'react';
import Typed from 'typed.js';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I hope you can learn a little about me here.^1000 I am a PhD student with interests in machine learning, optimization, and space application.^3000"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 100,
      loop:false
    });
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  return (


      <Section row nopadding>

        <LeftSection>
          <SectionTitle main>
            Welcome to <br/>
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            
              {/* Element to display typing strings */}
              <span ref={el}></span>
                      
          </SectionText>
          <Button onClick={() => window.location = "#contact"}>Reach Out</Button>
        </LeftSection>
      </Section>
      
)};

export default Hero;