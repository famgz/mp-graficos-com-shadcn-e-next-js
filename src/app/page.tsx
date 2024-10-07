import Header from '@/components/header';
import PartyChart from '@/components/party-chart';
import UFChart from '@/components/uf-chart';
import { ExpenseType } from '@/types/data';

function getYear(
  searchParamsYear: string | undefined,
  dataAvailableYears: number[],
) {
  const currentYear = new Date().getFullYear();
  const fallbackYear = dataAvailableYears.length
    ? Math.max(...dataAvailableYears)
    : currentYear;

  const searchParamsYearNumber = Math.floor(Number(searchParamsYear));

  if (
    !searchParamsYear ||
    isNaN(searchParamsYearNumber) ||
    !dataAvailableYears.includes(searchParamsYearNumber)
  ) {
    return fallbackYear;
  }

  return searchParamsYearNumber;
}

interface Props {
  searchParams: {
    type?: ExpenseType;
    year?: string;
  };
}

function getType(searchParamType: string | undefined) {
  const isValidType =
    searchParamType && ['party', 'uf'].includes(searchParamType);
  return isValidType ? searchParamType : 'uf';
}

export default async function Home({ searchParams }: Props) {
  const expensesType = getType(searchParams.type);

  const url = `https://apis.codante.io/senator-expenses/summary/by-${expensesType}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data) return;

  const dataAvailableYears = data
    .map((item: { year: string }) => Number(item.year))
    .sort((a: number, b: number) => b - a);

  const year = getYear(searchParams.year, dataAvailableYears);

  return (
    <main className="container mx-auto p-16">
      <Header
        dataAvailableYears={dataAvailableYears}
        year={year}
        type={expensesType}
      />
      {expensesType === 'uf' ? (
        <UFChart year={year} data={data} />
      ) : (
        <PartyChart year={year} data={data} />
      )}
    </main>
  );
}
