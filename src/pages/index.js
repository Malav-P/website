import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Publications from '../components/Publications/Publications';
import Technologies from '../components/Technologies/Technologies';
import ContactForm from '../components/ContactForm/ContactForm';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Publications/>
      <Technologies />
      <ContactForm />
    </Layout>
  );
};

export default Home;
