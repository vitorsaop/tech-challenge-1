"use client";
import BalanceCard from "@/components/BalanceCard";
import { Footer } from "@/components/Footer";
import { HeaderAuthenticated } from "@/components/HeaderAuthenticated";
import ToggleEyeButton from "@/components/ToggleEyeButton";
import { useBalanceVisibility } from "@/context/BalanceVisibilityContext";
import ServicosDisponiveisMock from "@/data/servicosdisponiveis.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Transacao = {
  id: string;
  tipo: string;
  valor: number;
  data: string;
};

export default function ParaVoce() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [saldo, setSaldo] = useState(138529.21); // 💰 saldo inicial
  const { showBalance } = useBalanceVisibility();

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/transacoes");
      const data: Transacao[] = await res.json();
      setTransacoes(data);

      const novoSaldo =
        138529.21 + data.reduce((acc: number, t: Transacao) => acc + t.valor, 0);
      setSaldo(novoSaldo);
    };

    load();

    const handler = () => load();
    window.addEventListener("transacoes:updated", handler);
    return () => window.removeEventListener("transacoes:updated", handler);
  }, []);

  const transacoesPorMes = useMemo(() => {
    const grupos: { [mesAno: string]: Transacao[] } = {};
    transacoes.forEach((t) => {
      const data = new Date(t.data);
      const mesAno = data.toLocaleString("pt-BR", {
        month: "long",
        year: "numeric",
      });
      if (!grupos[mesAno]) grupos[mesAno] = [];
      grupos[mesAno].push(t);
    });
    return Object.entries(grupos).sort((a, b) => {
      const dataA = new Date(a[1][0].data).getTime();
      const dataB = new Date(b[1][0].data).getTime();
      return dataB - dataA;
    });
  }, [transacoes]);

  const formatarData = (dataISO: string) => {
    const d = new Date(dataISO);
    return (
      d.toLocaleDateString("pt-BR") +
      " - " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) +
      " hs"
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderAuthenticated />
      <div className="bg-[#e4e2e2] pt-10 pb-10 pl-4 pr-4">
        <div className="container mx-auto">
          <div className="gap-6 sm:block md:block lg:flex xl:flex">
            <div className="grow-1 bg-white p-5 rounded-[12px] mb-7">
              <nav className="flex flex-col space-y-4" aria-label="Navegação principal">
                <Link href={"#"} className="text-[17px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Portfólio</Link>
                <Link href="/paravoce/transacoes" className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Transações</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Conta e extrato</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Produtos de investimento</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Assessoria</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Cartões</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Crédito e consórcio</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Câmbio</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Home broker</Link>
                <Link href={"#"} className="text-[18px] font-medium text-[#666] hover:bg-[#e4e1e1] p-1.5">Seguros</Link>
              </nav>
            </div>

            {/* -------------------- SALDO -------------------- */}
            <div className="grow-2">
              <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-5 bg-[#CCC] p-7 rounded-[12px] bg-[url('/pixels-1.svg')] bg-right-top bg-no-repeat mb-7">
                <section>
                  <h1 className="text-[26px] color-[#000] font-medium">
                    Bem-vindo, Paulo : )
                    <span className="block text-[16px] color-[#000] font-medium">
                      Quarta-feira, 04/10/2025.
                    </span>
                  </h1>
                </section>
                <section>
                  <h2 className="flex items-center text-[26px] color-[#000] font-medium mb-5">
                    Seu saldo: <ToggleEyeButton />
                  </h2>
                  <div className="text-[18px]">
                    <b>Conta corrente:</b>
                    <BalanceCard value={saldo} />
                  </div>
                </section>
              </div>

              {/* -------------------- SERVIÇOS -------------------- */}
              <div className="bg-[#CCC] p-7 rounded-[12px] mb-7">
                <h2 className="text-[24px] font-medium text-[#000] mb-6">Serviços disponíveis para você</h2>
                <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {ServicosDisponiveisMock.map((servicos) => (
                    <Link key={servicos.id} href="#" className="bg-[#FFF] p-4 text-[#666] flex flex-col items-center justify-center h-42 rounded-[8px] text-[19px] font-semibold text-center">
                      <Image src={servicos.imagemUrl} alt={servicos.titulo} width={60} height={60} className="mb-3.5"/>
                      {servicos.titulo}
                    </Link>
                  ))}
                </section>
              </div>
            </div>

            {/* -------------------- EXTRATO -------------------- */}
            <div className="grow-4 bg-white p-6 rounded-[12px]">
              <section aria-labelledby="extrato-financeiro">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-[24px] font-medium text-[#000]" id="extrato-financeiro">Extrato financeiro</h3>
                  <Link href={"/paravoce/nova-transacao"} className="bg-[#47A138] text-white px-4 py-2 rounded-md hover:bg-[#3a8a2e] text-sm font-medium transition-colors">+ Nova Transação</Link>
                </div>

                {transacoesPorMes.map(([mesAno, transacoes]) => (
                  <div className="mb-10" key={mesAno}>
                    <h4 className="flex justify-end items-center text-[17px] font-semibold text-[#000] mb-6 mt-3 text-right">
                      <Image src={"/calendario.svg"} alt="Calendário" width={22} height={22} className="mr-2"/>
                      {mesAno.charAt(0).toUpperCase() + mesAno.slice(1)}
                    </h4>
                    <ul className="text-[16px] text-right">
                      {transacoes
                        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
                        .map((t) => (
                          <li key={t.id} className="mb-2.5 pb-2.5 border-b border-solid border-[#CCC]">
                            <p className="flex justify-between w-full">
                              <span className="text-[#a7a7a7]">{formatarData(t.data)}</span>
                              <span className="text-[#000] font-semibold">{t.tipo}</span>
                            </p>
                            <span className={`flex justify-end text-[17px] font-semibold items-center ${t.valor > 0 ? "text-[green]" : "text-[red]"}`}>
                              {showBalance ? (
                                <>
                                  {t.valor > 0 ? "+" : "-"} R$ {Math.abs(t.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                                </>
                              ) : "••••••••••"}
                              <Image src={t.valor > 0 ? "/arrow-up.png" : "/arrow-down.png"} alt={t.valor > 0 ? "Arrow up" : "Arrow down"} width={13} height={13} className="ml-1"/>
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
