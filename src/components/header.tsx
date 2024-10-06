import CalendarIcon from '@/assets/icons/calendar';
import FlagIcon from '@/assets/icons/flag';
import LogoIcon from '@/assets/icons/logo';
import MapIcon from '@/assets/icons/map';

export default function Header() {
  return (
    <header className="flex-center mb-12 flex-col gap-10 lg:flex-row">
      <div className="flex items-center gap-4">
        <LogoIcon className="stroke-slate-500" />
        <div className="flex flex-col">
          <h1 className="mb-1 text-3xl font-bold">
            Gastos dos Senadores Brasileiros
          </h1>
          <p>Gastos dos Senadores Brasileiros total por estado (UF) - CEAPS</p>
        </div>
      </div>

      <nav className="flex gap-6">
        <div className="border-r-2 pr-6">
          <button className="flex-center flex-col gap-2 rounded-lg border-2 fill-slate-500 px-4 py-3 text-xs">
            <CalendarIcon />
            Calendario
          </button>
        </div>
        <div className="flex gap-4">
          <button className="flex-center flex-col gap-2 rounded-lg border-2 fill-slate-500 px-4 py-3 text-xs transition-colors hover:border-violet-500 hover:fill-violet-500 hover:text-violet-500">
            <MapIcon />
            Gastos por UF
          </button>
          <button className="flex-center flex-col gap-2 rounded-lg border-2 fill-slate-500 px-4 py-3 text-xs transition-colors hover:border-violet-500 hover:fill-violet-500 hover:text-violet-500">
            <FlagIcon />
            Gastos por Partido
          </button>
        </div>
      </nav>
    </header>
  );
}
