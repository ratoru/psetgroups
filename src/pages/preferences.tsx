import { Placeholder } from '@/components/Placeholder';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Psetgroup Preferences"
        description="Enter your availability and preferences for a specific class"
      />
    }
  >
    <Placeholder />
  </Main>
);

export default About;
