import Header from '@/components/header';
import UFChart from '@/components/uf-chart';

export default function Home() {
  return (
    <main className='container mx-auto p-16'>
      <Header />

      <UFChart />
    </main>
  );
}
