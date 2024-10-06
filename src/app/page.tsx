import Header from '@/components/header';
import UFChart from '@/components/uf-chart';

export default async function Home() {
  const res = await fetch(
    `https://apis.codante.io/senator-expenses/summary/by-uf`,
  );
  const ufData = await res.json();

  return (
    <main className="container mx-auto p-16">
      <Header />

      <UFChart data={ufData} />
    </main>
  );
}
