// import { useRouter } from 'next/router';
import { Cta } from '@/components/Cta';
import { Faq } from '@/components/Faq';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Pset Groups"
          description="Find pset groups for your classes based on your preferences."
        />
      }
    >
      <Hero />
      <Features />
      <Faq />
      <Cta />
    </Main>
  );
};

export default Index;
