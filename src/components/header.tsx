import logoIcon from '@/assets/icons/logo.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import flagIcon from '@/assets/icons/flag.svg';
import mapIcon from '@/assets/icons/map.svg';
import Image from 'next/image';
import NavButton from '@/components/nav-button';

export default function Header() {
  return (
    <header className='mb-12 flex justify-between'>
      <div className='flex items-center gap-4'>
        <Image src={logoIcon} alt='logo' width={70} height={70} />
        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold mb-1'>
            Gastos dos Senadores Brasileiros
          </h1>
          <p>Gastos dos Senadores Brasileiros total por estado (UF) - CEAPS</p>
        </div>
      </div>

      <nav className='flex gap-6'>
        <div className='border-r-2 pr-6 '>
          <NavButton
            imageSrc={calendarIcon}
            imageAlt='icone calendario'
            title='Calendário'
          />
        </div>
        <div className='flex gap-4'>
          <NavButton
            imageSrc={mapIcon}
            imageAlt='icone de mapa'
            title='Gastos por UF'
          />

          <NavButton
            imageSrc={flagIcon}
            imageAlt='icone de bandeira'
            title='Gastos por Partido'
          />
        </div>
      </nav>
    </header>
  );
}
