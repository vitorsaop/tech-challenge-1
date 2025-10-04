import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 bg-[#000] shadow-sm h-22 text-white">
      <div className="w-full px-10">
        <div className="flex items-center justify-between">
          <div className="items-center flex gap-18">
            <Link href="/" aria-label="ByteBank - Página Inicial">
              <Image src={"/logo-green.svg"} alt="Logo ByteBank" width={180} height={32} />
            </Link>
            <nav className="space-x-14" aria-label="Navegação principal">
              <Link href={"/"} className="text-[#47A138] text-[19px] font-medium hover:underline">Home</Link>
              <Link href={"/paravoce"} className="text-[#47A138] text-[19px] font-medium hover:underline">Para você</Link>
              <Link href={"#"} className="text-[#47A138] text-[19px] font-medium hover:underline">Para empresas</Link>
              <Link href={"#"} className="text-[#47A138] text-[19px] font-medium hover:underline">Bytebank</Link>
              <Link href={"#"} className="text-[#47A138] text-[19px] font-medium hover:underline">Ajuda</Link>
            </nav>            
          </div>
          <div className='flex gap-5 md:grid-cols-2'>            
            <Link href={"#"} 
              className="inline-flex justify-center items-center h-12 text-center rounded-[8px] bg-[#47a138] hover:bg-[#FFF] min-w-[196px] text-[17px] hover:text-[#59b449] transition duration-300" aria-label="Abrir minha conta">
              Abrir minha conta
            </Link>            
            <Link href={"#"} 
              className="inline-flex justify-center items-center h-12 text-center rounded-[8px] bg-transparent hover:bg-[#47a138] border-[2px] border-[#47a138] min-w-[196px] text-[#47a138] hover:text-[#FFF] text-[17px] transition duration-300" aria-label="Já tenho conta">
              Já tenho conta
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}