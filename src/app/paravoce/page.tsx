import { HeaderLogado } from '@/components/header-logado';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ParaVoce() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderLogado />
        <div className="bg-[#e4e2e2] pt-10 pb-23">
          <div className="container mx-auto">            
            <div className="flex gap-6">
              <div className="grow-1 bg-white p-6 rounded-[12px]">
                <nav className="flex flex-col space-y-4" aria-label="Navegação principal">
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Portfólio
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Conta e extrato
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Produtos de investimento
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Assessoria
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Cartões
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Crédito e consórcio
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Câmbio
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Home broker
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Seguros
                  </Link>
                  <Link 
                    href={"#"} 
                    className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5"
                  >
                    Bytebank content
                  </Link>
                </nav>
              </div>
              <div className="grow-7">                
                <div className="grid grid-cols-2 gap-5 bg-[#CCC] p-9 rounded-[12px] mb-7 bg-[url('/pixels-1.svg')] bg-right-top bg-no-repeat">
                  <section>
                    <h1 className="text-[28px] color-[#000] font-medium">
                      Bem-vindo, Paulo : )
                      <span className="block text-[16px] color-[#000] font-medium">Quarta-feira, 04/10/2025</span>
                    </h1>
                  </section>
                  <section>
                    <h2 className="flex items-center text-[28px] color-[#000] font-medium mb-6">
                      Seu saldo: <Image src={"/eye.svg"} alt="Eye" width={35} height={35} className="ml-2" />
                    </h2>
                    <p className="text-[17px] mb-4"><b>Conta corrente:</b> + R$ 3.864,70</p>    
                    <p className="text-[17px] mb-4"><b>Conta investimentos:</b> + R$ 643.864,70</p>
                    <p className="text-[17px]"><b>Lançamentos futuros:</b> - R$ 3.900,76</p>                                          
                  </section>
                </div>
                <div className="bg-[#CCC] p-9 rounded-[12px]">
                  <h2 id="servicos-disponiveis" className="text-[24px] font-medium text-[#000] mb-6">Serviços disponíveis para você</h2>
                  <section className="grid grid-cols-3 gap-5" aria-labelledby="servicos-disponiveis">
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/emprestimo.svg"} 
                        alt="Empréstimo" 
                        width={70} 
                        height={70} 
                        className="mb-3.5" 
                      />
                      Empréstimo
                    </Link>
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/meus-cartoes.svg"} 
                        alt="Cartões" 
                        width={70} 
                        height={70} 
                        className="mb-3.5"
                      />
                      Cartões
                    </Link>
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/doacoes.svg"} 
                        alt="Doações" 
                        width={70} 
                        height={70} 
                        className="mb-3.5" 
                      />
                      Doações
                    </Link>
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/pix.svg"} 
                        alt="PIX" 
                        width={70} 
                        height={70} 
                        className="mb-3.5" 
                      />
                      PIX
                    </Link>
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/seguros.svg"} 
                        alt="Seguros" 
                        width={70} 
                        height={70} 
                        className="mb-3.5" 
                      />
                      Seguros
                    </Link>
                    <Link 
                      href={"/"} 
                      className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[20px] font-semibold"
                    >
                      <Image 
                        src={"/credito-celular.svg"} 
                        alt="Crédito celular" 
                        width={70} 
                        height={70} 
                        className="mb-3.5" 
                      />
                      Crédito celular
                    </Link>
                  </section>                  
                </div>
              </div>   
              <div className="grow-3 bg-white p-7 rounded-[12px]">
                <section aria-labelledby="extrato-financeiro">                  
                  <div className="flex justify-between items-center mb-10">
                    <h3 
                      id="extrato-financeiro" 
                      className="text-[24px] font-medium text-[#000]"
                    >
                      Extrato financeiro
                    </h3>
                    {/* Botão apara nova transacao */}
                    <Link 
                      href={"/paravoce/nova-transacao"}
                      className="bg-[#47A138] text-white px-4 py-2 rounded-md hover:bg-[#3a8a2e] text-sm font-medium transition-colors"
                    >
                      + Nova Transação
                    </Link>
                  </div>
                  
                  {/* Mês Outubro */}
                  <div className="mb-10">                
                    <h4 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-6 mt-3 text-right">
                      <Image 
                        src={"/calendario.svg"} 
                        alt='Calendário' 
                        width={22} 
                        height={22} 
                        className="mr-2" 
                      />
                      Outubro / 2025
                    </h4>
                    <ul className="text-[16px] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">04/10/2025 - 15:30 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 8.294,50 
                          <Image 
                            src={"/arrow-up.png"} 
                            alt="Arrow up" 
                            width={13} 
                            height={13} 
                            className="ml-1" 
                          /> 
                        </span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        <p className="flex justify-between w-full">
                          <span className="text-[#a7a7a7]">02/10/2025 - 16:45 hs</span>
                          <span className="text-[#000]">PIX</span>
                        </p>                        
                        <span className="flex justify-end items-center text-[green]">
                          + R$ 6.674,90
                          <Image 
                            src={"/arrow-up.png"} 
                            alt="Arrow up" 
                            width={13} 
                            height={13} 
                            className="ml-1" 
                          />
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
                    <h4 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-6 mt-3 text-right">
                      <Image 
                        src={"/calendario.svg"} 
                        alt='Calendário' 
                        width={22} 
                        height={22} 
                        className="mr-2" 
                      />
                      Setembro / 2025
                    </h4>
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
                    <h4 className="flex justify-end items-center text-[17px] font-bold text-[#000] mb-6 mt-3 text-right">
                      <Image 
                        src={"/calendario.svg"} 
                        alt='Calendário' 
                        width={22} 
                        height={22} 
                        className="mr-2" 
                      />
                      Agosto / 2025
                    </h4>
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

