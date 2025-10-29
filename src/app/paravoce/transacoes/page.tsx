"use client";
import ConfirmModal from "@/components/ConfirmModal";
import { Footer } from "@/components/Footer";
import { HeaderLogado } from "@/components/header-logado";
import SuccessModal from "@/components/SuccessModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Conta = {
  id: string;
  chavePix?: string;
  agencia: string;
  numero: string;
  saldo: number;
};

type Transacao = {
  id: string;
  data: string;
  tipo: string;
  valor: number;
  contaOrigem?: Conta;
  contaDestino?: Conta;
  descricao?: string;
};

function agruparPorMes(transacoes: Transacao[]) {
  const grupos: { [key: string]: Transacao[] } = {};
  transacoes.forEach((t) => {
    if (!t.data) return;
    const data = new Date(t.data);
    const mesAno = data.toLocaleString("pt-BR", {
      month: "long",
      year: "numeric",
    });
    if (!grupos[mesAno]) {
      grupos[mesAno] = [];
    }
    grupos[mesAno].push(t);
  });
  return grupos;
}

export default function TodasTransacoesPage() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [expandida, setExpandida] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [transacaoToDelete, setTransacaoToDelete] = useState<string | null>(
    null
  );

  useEffect(() => {
    fetch("/api/transacoes")
      .then((res) => res.json())
      .then(setTransacoes);
  }, []);

  const { transacoesPorMes, mesesOrdenados } = useMemo(() => {
    const grupos = agruparPorMes(transacoes);
    const meses = Object.keys(grupos);

    const mesesParaNumero: { [key: string]: number } = {
      janeiro: 1,
      fevereiro: 2,
      março: 3,
      abril: 4,
      maio: 5,
      junho: 6,
      julho: 7,
      agosto: 8,
      setembro: 9,
      outubro: 10,
      novembro: 11,
      dezembro: 12,
    };

    meses.sort((a, b) => {
      const [mesA, anoA] = a.split(" de ");
      const [mesB, anoB] = b.split(" de ");
      const dataA = new Date(
        Number(anoA),
        mesesParaNumero[mesA.toLowerCase()] - 1
      );
      const dataB = new Date(
        Number(anoB),
        mesesParaNumero[mesB.toLowerCase()] - 1
      );
      return dataB.getTime() - dataA.getTime();
    });

    return { transacoesPorMes: grupos, mesesOrdenados: meses };
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

  const formatarConta = (conta?: Conta) => {
    if (!conta) return "-";
    return conta.numero;
  };

  const handleDelete = async (id: string) => {
    setTransacaoToDelete(id);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    if (!transacaoToDelete) return;

    try {
      const response = await fetch(`/api/transacoes?id=${transacaoToDelete}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTransacoes(transacoes.filter((t) => t.id !== transacaoToDelete));
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        alert(`Erro ao deletar transação: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro ao deletar transação:", error);
      alert("Erro ao deletar transação. Tente novamente.");
    } finally {
      setTransacaoToDelete(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderLogado />
      <main className="bg-[#e4e2e2] pt-10 pb-10 flex-1">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-[12px] shadow">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Todas as Transações</h1>
              <Link
                href="/paravoce"
                className="bg-[#47A138] text-white px-4 py-2 rounded-md hover:bg-[#3a8a2e] text-sm font-medium transition-colors"
              >
                Voltar
              </Link>
            </div>
            <div
              className={`grid gap-8 ${
                mesesOrdenados.length > 1
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {mesesOrdenados.length === 0 ? (
                <div className="text-center text-gray-500 py-10 col-span-full">
                  Nenhuma transação encontrada.
                </div>
              ) : (
                mesesOrdenados.map((mesAno) => (
                  <div key={mesAno}>
                    <h2 className="text-lg font-bold mb-4 text-right capitalize">
                      {mesAno}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {transacoesPorMes[mesAno].map((t) => {
                        const aberta = expandida === t.id;
                        return (
                          <div
                            key={t.id}
                            className={
                              (t.valor > 0
                                ? "bg-green-50 border border-green-200"
                                : "bg-red-50 border border-red-200") +
                              " rounded-xl shadow p-4 w-full flex flex-col gap-2 cursor-pointer transition-all duration-300 " +
                              (aberta ? "scale-105 z-10" : "hover:scale-102")
                            }
                            style={{
                              boxShadow: aberta
                                ? "0 8px 32px 0 rgba(60,60,60,0.18)"
                                : undefined,
                              minHeight: aberta ? 220 : undefined,
                            }}
                            onClick={() => setExpandida(aberta ? null : t.id)}
                          >
                            <div className="text-gray-500 text-xs">
                              {formatarData(t.data)}
                            </div>
                            <div className="text-base font-semibold text-gray-800">
                              {t.tipo}
                            </div>
                            <div className="text-sm text-gray-700">
                              <b>Conta origem:</b>{" "}
                              {formatarConta(t.contaOrigem)}
                            </div>
                            <div className="text-sm text-gray-700">
                              <b>Conta destino:</b>{" "}
                              {formatarConta(t.contaDestino)}
                            </div>
                            <div
                              className={`text-lg font-bold flex items-center ${
                                t.valor > 0 ? "text-green-700" : "text-red-700"
                              }`}
                            >
                              {t.valor > 0 ? "+" : "-"} R${" "}
                              {Math.abs(t.valor).toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                              })}
                              <Image
                                src={
                                  t.valor > 0
                                    ? "/arrow-up.png"
                                    : "/arrow-down.png"
                                }
                                alt={
                                  t.valor > 0
                                    ? "Seta para cima"
                                    : "Seta para baixo"
                                }
                                width={16}
                                height={16}
                                className="ml-2"
                              />
                            </div>
                            {aberta && (
                              <div className="mt-3 flex flex-col gap-2 text-[15px] text-gray-800 animate-fade-in">
                                <div>
                                  <b>Tipo:</b> {t.tipo}
                                </div>
                                <div>
                                  <b>Data:</b> {formatarData(t.data)}
                                </div>
                                <div>
                                  <b>Valor:</b> {t.valor > 0 ? "+" : "-"} R${" "}
                                  {Math.abs(t.valor).toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                  })}
                                </div>
                                <div>
                                  <b>Conta origem:</b>{" "}
                                  {t.contaOrigem
                                    ? `${t.contaOrigem.numero} (Ag. ${t.contaOrigem.agencia})`
                                    : "-"}
                                </div>
                                <div>
                                  <b>Conta destino:</b>{" "}
                                  {t.contaDestino
                                    ? `${t.contaDestino.numero} (Ag. ${t.contaDestino.agencia})`
                                    : "-"}
                                </div>
                                {t.contaOrigem?.chavePix && (
                                  <div>
                                    <b>Chave Pix Origem:</b>{" "}
                                    {t.contaOrigem.chavePix}
                                  </div>
                                )}
                                {t.contaDestino?.chavePix && (
                                  <div>
                                    <b>Chave Pix Destino:</b>{" "}
                                    {t.contaDestino.chavePix}
                                  </div>
                                )}
                                {t.descricao && (
                                  <div>
                                    <b>Descrição:</b> {t.descricao}
                                  </div>
                                )}
                                <div className="flex gap-2 mt-2">
                                  <Link
                                    href={`/paravoce/editar/${t.id}`}
                                    className="bg-[#47A138] text-white px-3 py-1 rounded-md hover:bg-[#3a8a2e] transition-colors text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Editar
                                  </Link>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDelete(t.id);
                                    }}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-sm"
                                  >
                                    Deletar
                                  </button>
                                </div>
                              </div>
                            )}
                            {!aberta && (
                              <div className="flex gap-2 mt-2">
                                <Link
                                  href={`/paravoce/editar/${t.id}`}
                                  className="bg-[#47A138] text-white px-3 py-1 rounded-md hover:bg-[#3a8a2e] transition-colors text-sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Editar
                                </Link>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(t.id);
                                  }}
                                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors text-sm"
                                >
                                  Deletar
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmDelete}
        title="Confirmar Exclusão"
        message="Tem certeza que deseja deletar esta transação? Esta ação não pode ser desfeita."
        confirmText="Deletar"
        cancelText="Cancelar"
        type="error"
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Sucesso!"
        message="Transação deletada com sucesso!"
        buttonText="OK"
      />

      <style>{`
        .animate-fade-in {
          animation: fadeIn .25s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}
