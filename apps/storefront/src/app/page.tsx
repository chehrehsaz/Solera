import { Hero } from '../components/home/hero';
import { Header } from '../components/layout/header';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
    </main>
  );
}