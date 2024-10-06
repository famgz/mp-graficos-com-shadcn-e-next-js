'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { cn, formatCurrency } from '@/lib/utils';
import { UfWrapper } from '@/types/data';
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from 'recharts';

interface Props {
  data: UfWrapper[];
  year?: number;
}

export default function UFChart({ data, year = 2024 }: Props) {
  let chartData = data.find((item) => Number(item.year) === year)?.data;
  if (!chartData) return null;

  // add average if not yet
  if (!chartData.some((item) => item.uf === 'Brasil')) {
    const average = {
      uf: 'Brasil',
      total_expenses: chartData?.length
        ? chartData?.reduce((acc, item) => acc + item.total_expenses, 0) /
          chartData.length
        : 0,
    };
    chartData.push(average);
  }

  chartData = chartData?.sort((a, b) => b.total_expenses - a.total_expenses);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function CustomToooltip({ active, payload, label }: any) {
    if (active && payload && payload.length) {
      const formattedValue = formatCurrency(payload[0].value);
      return (
        <div className="rounded bg-white/90 p-2">
          <p className="label">
            <span className="font-bold text-violet-500">{label}</span> :{' '}
            {formattedValue}
          </p>
        </div>
      );
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Gastos por UF</CardTitle>
        <CardDescription>Dados de 2024</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={{}} className="min-h-[600px] w-full">
          <BarChart data={chartData} layout="vertical">
            <YAxis
              dataKey="uf"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis
              type="number"
              dataKey="total_expenses"
              tickMargin={10}
              tickFormatter={formatCurrency}
            />
            <ChartTooltip content={CustomToooltip} />
            <Bar dataKey="total_expenses" radius={4} layout="vertical">
              {chartData.map((entry, index) => (
                <Cell
                  key={'cell-' + index}
                  className={cn(
                    entry.uf === 'Brasil'
                      ? 'fill-violet-700'
                      : 'fill-violet-500',
                  )}
                />
              ))}
              <LabelList
                dataKey={'uf'}
                position={'insideLeft'}
                className="fill-white font-bold"
              />
              <LabelList
                dataKey={'total_expenses'}
                position={'insideRight'}
                fontSize={12}
                className="fill-white"
                formatter={formatCurrency}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
