'use client';

import CustomToooltip from '@/components/chart-tooltip';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { AVERAGE_LABEL } from '@/constants/data';
import { cn, formatValue } from '@/lib/utils';
import { UFDataWrapper } from '@/types/data';
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from 'recharts';

interface Props {
  data: UFDataWrapper[];
  year?: number;
}

export default function UFChart({ data, year = 2024 }: Props) {
  let chartData = data.find((item) => Number(item.year) === year)?.data;
  if (!chartData) return null;

  // add average if not yet
  if (!chartData.some((item) => item.uf === AVERAGE_LABEL)) {
    const average = {
      uf: AVERAGE_LABEL,
      total_expenses: chartData?.length
        ? chartData?.reduce((acc, item) => acc + item.total_expenses, 0) /
          chartData.length
        : 0,
    };
    chartData.push(average);
  }

  chartData = chartData?.sort((a, b) => b.total_expenses - a.total_expenses);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Gastos por UF</CardTitle>
        <CardDescription>Dados de {year}</CardDescription>
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
              tickFormatter={formatValue}
            />
            <ChartTooltip content={CustomToooltip} />
            <Bar dataKey="total_expenses" radius={4} layout="vertical">
              {chartData.map((entry, index) => (
                <Cell
                  key={'cell-' + index}
                  className={cn(
                    entry.uf === AVERAGE_LABEL
                      ? 'fill-violet-300'
                      : 'fill-violet-500',
                  )}
                />
              ))}
              <LabelList
                dataKey={'uf'}
                position={'insideLeft'}
                className="fill-white font-semibold"
              />
              <LabelList
                dataKey={'total_expenses'}
                position={'insideRight'}
                fontSize={12}
                className="fill-white"
                formatter={formatValue}
                offset={10}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
