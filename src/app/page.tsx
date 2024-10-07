import Header from '@/components/header';
import PartyChart from '@/components/party-chart';
import UFChart from '@/components/uf-chart';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  const apiBaseUrl = 'https://apis.codante.io/senator-expenses/summary';
  const [ufRes, partyRes] = await Promise.all([
    fetch(`${apiBaseUrl}/by-uf`),
    fetch(`${apiBaseUrl}/by-party`),
  ]);

  const [ufData, partyData] = await Promise.all([
    ufRes.json(),
    partyRes.json(),
  ]);

  return (
    <main className="container mx-auto p-16">
      <Header />
      <UFChart year={2023} data={ufData} />
      <Separator className="my-4" />
      <PartyChart year={2023} data={partyData} />
    </main>
  );
}
