import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="bg-gradient-to-b from-[#004D61] to-[#FFF] pt-10 pb-23">
        <div className="container mx-auto text-center pl-5 pr-5">
          <h1 className="text-[32px] font-bold text-[#000]">
            Ops! Não encontramos a página...
          </h1>
          <p className="text-[18px] font-semibold text-[#000] mt-6 mb-8">
            E olha que exploramos o universo procurando por ela!
            <br />
            Que tal voltar e tentar novamente?
          </p>
          <Link 
            href="/" 
            className="
              inline-flex 
              justify-center 
              items-center 
              h-12 
              text-center 
              w-[220px] 
              rounded-[8px] 
              bg-[#000] 
              hover:bg-[transparent] 
              border-[3px] 
              border-[#000] 
              font-semibold 
              text-[#FFF] 
              text-[18px] 
              hover:text-[#000] 
              transition duration-300
            " 
            aria-label="Voltar ao início"
          >
            Voltar ao início
          </Link> 
          <Image 
            className="mx-auto mt-16" 
            src={"/not-found.svg"} 
            alt="Página não encontrada" 
            width={420} 
            height={320} 
          />
        </div>
      </div>      
      <Footer />
    </div>
  );
}