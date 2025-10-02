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
              <div className="grow-7">
                <section className="bg-[#004D61] p-6 rounded-[12px] h-100 mb-5">
                  Leandro
                </section>
                <section className="bg-[#004D61] p-6 rounded-[12px] h-100">
                  Leandro
                </section>
              </div>
              <div className="grow-2 bg-white p-6 rounded-[12px]">
                <section>
                  
                  <h2 className="text-[24px] font-medium text-[#000]">Extrato</h2>
                  
                  <div className="mb-5">

                    <h3 className="text-[18px] font-bold text-[#918f8f] mb-3.5 mt-2.5">Janeiro</h3>  

                    <ul className="text-[16px] font-semibold text-[#000] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Transferência
                        <br />
                        <span className="text-[green]">+ R$ 1.100,00</span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Depósito
                        <br />
                        <span className="text-[red]">- R$ 2.360,00</span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Depósito
                        <br />
                        <span className="text-[green]">+ R$ 975,00</span>
                      </li>
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Saque
                        <br />
                        <span className="text-[green]">+ R$ 2.150,00</span>
                      </li>
                      <li className="mb-2.5 pb-2.5">
                        PIX
                        <br />
                        <span className="text-[red]">- R$ 100,00</span>
                      </li>
                    </ul>

                  </div>

                  <div className="mb-5">

                    <h3 className="text-[18px] font-bold text-[#918f8f] mb-3.5 mt-2.5">Fevereiro</h3>  

                    <ul className="text-[16px] font-semibold text-[#000] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Transferência
                        <br />
                        <span className="text-[green]">+ R$ 6.170,00</span>
                      </li>                      
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Depósito
                        <br />
                        <span className="text-[green]">+ R$ 100,00</span>
                      </li>                      
                      <li className="mb-2.5 pb-2.5">
                        PIX
                        <br />
                        <span className="text-[red]">- R$ 745,70</span>
                      </li>
                    </ul>

                  </div>

                  <div className="mb-5">

                    <h3 className="text-[18px] font-bold text-[#918f8f] mb-3.5 mt-2.5">Março</h3>  

                    <ul className="text-[16px] font-semibold text-[#000] text-right">
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        TED
                        <br />
                        <span className="text-[green]">+ R$ 1.070,00</span>
                      </li>                      
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        Depósito
                        <br />
                        <span className="text-[green]">+ R$ 9.100,00</span>
                      </li>                      
                      <li className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                        PIX
                        <br />
                        <span className="text-[red]">- R$ 2.745,70</span>
                      </li>
                      <li className="mb-2.5 pb-2.5">
                        PIX
                        <br />
                        <span className="text-[green]">- R$ 4.097,10</span>
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

