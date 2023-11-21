import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <section
      className="main-background relative h-screen overflow-hidden text-center"
      data-testid="main-background"
    >
      <h2 className="pt-40 text-5xl font-medium text-white">
        Encuentra tú próximo auto
      </h2>
    </section>
  </Main>
);

export default Index;
