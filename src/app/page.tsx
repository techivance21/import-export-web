// app/page.tsx
import Hero from '@/components/Hero';
import Services from '../components/Services';
import PromoBanner from '../components/Promobanner';
import WhyChooseUs from '@/components/Whychooseus';
import News from '../components/News';
import Projects from '../components/Project';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <PromoBanner/>
      <WhyChooseUs/>
      <Blog/>
      <Projects/>
      <News/>
    </main>
  );
}
