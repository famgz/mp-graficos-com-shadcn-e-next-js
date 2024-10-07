import { formatCurrency, formatValue } from '@/lib/utils';

export default function // eslint-disable-next-line @typescript-eslint/no-explicit-any
CustomToooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const formattedValue = formatCurrency(payload[0].value);
    return (
      <div className="rounded bg-white/90 p-2">
        <p className="label">
          <span className="font-bold text-slate-700">{label}</span> :{' '}
          {formattedValue}
        </p>
      </div>
    );
  }
}
