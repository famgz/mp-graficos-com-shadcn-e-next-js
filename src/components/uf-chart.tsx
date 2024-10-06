'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UfData, UfWrapper } from '@/types/data';

interface Props {
  data: UfWrapper[];
  year?: number;
}

export default function UFChart({ data, year = 2024 }: Props) {
  const chartData = data.find((item) => Number(item.year) === year)?.data;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Gastos por UF</CardTitle>
        <CardDescription>Dados de 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <div>Grafico</div>
      </CardContent>
    </Card>
  );
}
