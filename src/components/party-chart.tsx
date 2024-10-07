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
import { PartyDataWrapper } from '@/types/data';
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from 'recharts';

interface Props {
  data: PartyDataWrapper[];
  year?: number;
}

export default function PartyChart({ data, year = 2024 }: Props) {
  const chartData = data.find((item) => Number(item.year) === year)?.data;
  if (!chartData) return null;

  let partyChartData = chartData.map(({ party, total_per_senator }) => ({
    party,
    total_per_senator,
  }));

  // add average if not yet
  if (!partyChartData.some((item) => item.party === AVERAGE_LABEL)) {
    const average = {
      party: AVERAGE_LABEL,
      total_per_senator: partyChartData?.length
        ? partyChartData?.reduce(
            (acc, item) => acc + item.total_per_senator,
            0,
          ) / partyChartData.length
        : 0,
    };
    partyChartData.push(average);
  }

  partyChartData = partyChartData?.sort(
    (a, b) => b.total_per_senator - a.total_per_senator,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Gastos por Partido (Média por Senador)
        </CardTitle>
        <CardDescription>Dados de {year}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={{}} className="min-h-[600px] w-full">
          <BarChart data={partyChartData} layout="vertical">
            <YAxis
              dataKey="party"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis
              type="number"
              dataKey="total_per_senator"
              tickMargin={10}
              tickFormatter={formatValue}
            />
            <ChartTooltip content={CustomToooltip} />
            <Bar dataKey="total_per_senator" radius={4} layout="vertical">
              {partyChartData.map((entry, index) => (
                <Cell
                  key={'cell-' + index}
                  className={cn(
                    entry.party === AVERAGE_LABEL
                      ? 'fill-orange-300'
                      : 'fill-orange-500',
                  )}
                />
              ))}
              <LabelList
                dataKey={'party'}
                position={'insideLeft'}
                className="fill-white font-semibold"
              />
              <LabelList
                dataKey={'total_per_senator'}
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
