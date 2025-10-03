import { HeaderLogado } from '@/components/header-logado';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderLogado />
        <div className="bg-[#e4e2e2] pt-10 pb-23">
          <div className="container mx-auto">
            <div className="flex gap-6">

              <div className="grow-1 bg-white p-6 rounded-[12px]">
                <nav className="flex flex-col space-y-5" aria-label="Navegação principal">
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Portfólio</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Conta e extrato</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Produtos de investimento</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Assessoria</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Cartões</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Crédito e consórcio</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Câmbio</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Home broker</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Seguros</Link>
                  <Link href={"#"} className="text-[18px] font-medium text-[#666]">Bytebank content</Link>
                </nav>
              </div>

              <div className="grow-8">
                <section className="bg-[#004D61] p-6 rounded-[12px] h-100 mb-5">
                  Leandro
                </section>
                <section className="bg-[#CCC] p-6 rounded-[12px] h-100">
                  Leandro
                </section>
              </div>
              
              <div className="grow-1 bg-white p-6 rounded-[12px]">
                <section aria-labelledby="extrato-financeiro">                  
                  <h2 id="extrato-financeiro" className="text-[24px] font-medium text-[#000] mb-10">Extrato financeiro</h2> 

                  {/* Mês Outubro */}
                  <div className="mb-10">                
                    <h3 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-4 mt-3 text-right">
                      <Image src={"/calendario.svg"} alt='Calendário' width={22} height={22} className="mr-2" />Outubro / 2025
                    </h3>
                    <ul className="text-[16px] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">04/10/2025 - 15:30 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 8.294,50 
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" /> 
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">02/10/2025 - 16:45 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 6.674,90
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">01/10/2025 - 09:35 hs</span>
                          <span className="text-[#000]">TED</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[red]">
                          - R$ 1.365,86
                          <Image src={"/arrow-down.png"} alt="Arrow down" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Mês Setembro */}
                  <div className="mb-10">
                    <h3 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-4 mt-3 text-right">
                      <Image src={"/calendario.svg"} alt='Calendário' width={22} height={22} className="mr-2" />Setembro / 2025
                    </h3>
                    <ul className="text-[16px] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">27/09/2025 - 14:00 hs</span>
                          <span className="text-[#000]">Depósito</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 1.100,00
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">20/09/2025 - 18:10 hs</span>
                          <span className="text-[#000]">Transferência</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[red]">
                          - R$ 2.360,00
                          <Image src={"/arrow-down.png"} alt="Arrow down" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">18/09/2025 - 11:25 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                                    
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 975,00
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">16/09/2025 - 08:00 hs</span>
                          <span className="text-[#000]">Transferência</span>
                        </p>                                 
                        <span className="flex justify-end items-center text-[red]">
                          - R$ 2.150,00
                          <Image src={"/arrow-down.png"} alt="Arrow down" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">12/09/2025 - 22:20 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 2.680,75
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Mês Agosto */}
                  <div className="mb-10">                    
                    <h3 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-4 mt-3 text-right">
                      <Image src={"/calendario.svg"} alt='Calendário' width={22} height={22} className="mr-2" />Agosto / 2025
                    </h3>
                    <ul className="text-[16px] text-right">                      
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">20/08/2025 - 13:44 hs</span>
                          <span className="text-[#000]">Transferência</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 2.360,00
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">14/08/2025 - 11:24 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                                    
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 9.975,00
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">10/08/2025 - 21:26 hs</span>
                          <span className="text-[#000]">Depósito</span>
                        </p>                                 
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 759,00
                          <Image src={"/arrow-up.png"} alt="Arrow up" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">05/08/2025 - 07:45 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>
                        <span className="flex justify-end items-center text-[red]">
                          - R$ 2.680,75
                          <Image src={"/arrow-down.png"} alt="Arrow down" width={13} height={13} className="ml-1" />
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">05/08/2025 - 12:54 hs</span>
                          <span className="text-[#000]">Cartão de crédito</span>
                        </p>
                        <span className="flex justify-end items-center text-[red]">
                          - R$ 2.680,75
                          <Image src={"/arrow-down.png"} alt="Arrow down" width={13} height={13} className="ml-1" />
                        </span>                        
                      </li>
                    </ul>
                  </div>
                </section>
              </div>    
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

