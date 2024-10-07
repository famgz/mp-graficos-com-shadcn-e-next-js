'use client';

import CalendarIcon from '@/assets/icons/calendar';
import FlagIcon from '@/assets/icons/flag';
import LogoIcon from '@/assets/icons/logo';
import MapIcon from '@/assets/icons/map';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Header() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentType = searchParams.get('type') || 'uf';

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <header className="flex-center mb-12 flex-col gap-10 lg:flex-row lg:justify-between">
      <div className="flex items-center gap-4">
        <LogoIcon className="stroke-slate-500" />
        <div className="flex flex-col">
          <h1 className="mb-1 text-3xl font-bold">
            Gastos dos Senadores Brasileiros
          </h1>
          <p className="text-left">
            Gastos dos Senadores Brasileiros total por estado (UF) - CEAPS
          </p>
        </div>
      </div>

      <nav className="flex gap-6">
        <div className="border-r-2 pr-6">
          <NavButton currentType={currentType}>
            <CalendarIcon />
            Calendario
          </NavButton>
        </div>
        <div className="flex gap-4">
          <NavButton
            currentType={currentType}
            expenseType={'uf'}
            onClick={() =>
              replace(`${pathname}?${createQueryString('type', 'uf')}`)
            }
          >
            <MapIcon />
            Gastos por UF
          </NavButton>

          <NavButton
            currentType={currentType}
            expenseType={'party'}
            onClick={() =>
              replace(`${pathname}?${createQueryString('type', 'party')}`)
            }
          >
            <FlagIcon />
            Gastos por Partido
          </NavButton>
        </div>
      </nav>
    </header>
  );
}

interface NavButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  currentType: string;
  expenseType?: string;
}

function NavButton({
  currentType,
  expenseType,
  children,
  ...props
}: NavButtonProps) {
  return (
    <button
      className={cn(
        'flex-center flex-col gap-2 rounded-lg border-2 fill-slate-500 px-4 py-3 text-xs transition-colors hover:border-violet-500 hover:fill-violet-500 hover:text-violet-500',
        {
          'border-violet-500 fill-violet-500 text-violet-500':
            expenseType && expenseType === currentType,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
