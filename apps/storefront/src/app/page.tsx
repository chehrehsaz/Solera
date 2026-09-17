import { Hero } from '../components/home/hero';
import { FeatureStrip } from '../components/home/feature-strip';
import { CategoryGrid } from '../components/home/category-grid';
import { Story } from '../components/home/story';
import { SignatureCollection } from '../components/home/signature-collection';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureStrip />
      <CategoryGrid />
      <Story />
      <SignatureCollection />
      <Footer />
    </main>
  );
}
