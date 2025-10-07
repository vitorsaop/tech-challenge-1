import Link from 'next/link';
import Image from 'next/image';

export function HeaderLogado() {
  return (
    <div className="flex items-center sticky top-0 z-50 bg-[#000] h-22 text-white">
      <div className="w-full px-10">
        <div className="flex items-center justify-between">
          <div className="items-center flex gap-18">
            <Link href="/" aria-label="ByteBank - Página Inicial">
              <Image 
                src={"/logo-green.svg"} 
                alt="Logo ByteBank" 
                width={180} 
                height={32} 
              />
            </Link>
          </div>
          <div className="flex gap-5 md:grid-cols-1">            
            <div className="flex items-center -space-x-1 overflow-hidden">
              <p className="text-right leading-5">
                <span className="block text-[17px] text-[#47A138]">Paulo Oliveira Gomes da Silva</span>
                <span className="block text-[14px] text-[#FFF]">Ag. 0897 - C/C - 16450-9</span>
              </p>
              <Image 
                src={"/user.png"} 
                width={50} 
                height={50} 
                alt="Paulo Oliveira Gomes da Silva" 
                className="inline-block ml-6 rounded-full"
              />              
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}