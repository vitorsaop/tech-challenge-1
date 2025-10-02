import Link from 'next/link';
import Image from 'next/image';

export function HeaderLogado() {
  return (
    <div className="flex items-center sticky top-0 z-50 bg-[#000] h-22 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="items-center flex gap-18">
            <Link href="/" aria-label="ByteBank - Página Inicial">
              <Image src={"/logo-green.svg"} alt="Logo ByteBank" width={180} height={32} />
            </Link>
          </div>
          <div className="flex gap-5 md:grid-cols-1">            
            <div className="flex items-center -space-x-1 overflow-hidden">
              <span className="text-[#47A138] text-[16px]">Paulo Oliveira Gomes da Silva</span>
              <Image src={"/user.png"} width={48} height={48} alt="Paulo Oliveira Gomes da Silva" className="inline-block ml-6 rounded-full"/>              
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}