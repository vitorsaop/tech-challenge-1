import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="flex items-center sticky top-0 z-50 bg-[#000] shadow-sm h-22 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="items-center grid grid-cols-1 gap-16 md:grid-cols-2">
            <Link href="/" aria-label="ByteBank - Página Inicial">
              <Image src={"/logo-green.svg"} alt="Logo ByteBank" width={200} height={32} />
            </Link>
            <nav className="items-start space-x-18" aria-label="Navegação principal">
              <Link className="text-[#47A138] text-[23px] font-medium hover:underline" href={"#"}>Sobre</Link>
              <Link className="text-[#47A138] text-[23px] font-medium hover:underline" href={"#"}>Serviços</Link>
            </nav>            
          </div>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            
            <Link className="
              inline-flex 
              justify-center
              items-center
              h-12 
              text-center 
              rounded-[8px] 
              bg-[#47a138]
              hover:bg-[#FFF] 
              min-w-[196px]
              text-[17px]
              font-medium
              hover:text-[#59b449]
              transition duration-300
            "
            href={"#"} aria-label="Abrir minha conta">
              Abrir minha conta
            </Link>
            
            <Link className="
              inline-flex 
              justify-center
              items-center 
              h-12
              text-center 
              rounded-[8px] 
              bg-transparent
              hover:bg-[#47a138] 
              border-[2px] 
              border-[#47a138] 
              min-w-[196px] 
              text-[#47a138]
              hover:text-[#FFF]
              text-[17px]
              font-medium
              transition duration-300
            " 
            href={"#"} aria-label="Já tenho conta">
              Já tenho conta
            </Link>            

          </div>
        </div>
      </div>
    </header>
  )
}