"use client";
import { Footer } from "@/components/Footer";
import { HeaderAuthenticated } from "@/components/HeaderAuthenticated";
import SuccessModal from "@/components/SuccessModal";
import { TipoTransacao } from "@/types/transacao";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Conta = {
  id: string;
  chavePix?: string;
  agencia: string;
  numero: string;
  saldo: number;
};

type Transacao = {
  id: string;
  tipo: string;
  valor: number;
  data: string;
  contaOrigem?: Conta;
  contaDestino?: Conta;
  descricao?: string;
};

export default function EditarTransacaoPage() {
  const { id } = useParams();
  const router = useRouter();

  const [transacao, setTransacao] = useState<Transacao | null>(null);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    tipo: "",
    valor: "",
    data: "",
    contaDestinoNumero: "",
    contaDestinoAgencia: "",
    contaDestinoChavePix: "",
    descricao: "",
  });

  useEffect(() => {
    fetch("/api/transacoes")
      .then((res) => res.json())
      .then((data: Transacao[]) => {
        const t = data.find((t) => t.id === id);
        setTransacao(t || null);
        setForm({
          tipo: t?.tipo || "",
          valor: t?.valor?.toString() || "",
          data:
            t?.data && t.data.length > 10
              ? t.data.slice(0, 16)
              : t?.data
              ? t.data + "T00:00"
              : "",
          contaDestinoNumero: t?.contaDestino?.numero || "",
          contaDestinoAgencia: t?.contaDestino?.agencia || "",
          contaDestinoChavePix: t?.contaDestino?.chavePix || "",
          descricao: t?.descricao || "",
        });
        setLoading(false);
      });
  }, [id]);

  const formatarData = (dataISO: string) => {
    const d = new Date(dataISO);
    return (
      d.toLocaleDateString("pt-BR") +
      " - " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) +
      " hs"
    );
  };

  const exigeDestino = form.tipo && form.tipo !== TipoTransacao.SAQUE;
  const ehPix = form.tipo === TipoTransacao.PIX;

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    router.push("/paravoce/transacoes");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <HeaderAuthenticated />
        <div className="bg-[#e4e2e2] flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-[12px] shadow text-center">
            <h1 className="text-2xl font-bold mb-4">Carregando...</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!transacao) {
    return (
      <div className="flex min-h-screen flex-col">
        <HeaderAuthenticated />
        <div className="bg-[#e4e2e2] flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-[12px] shadow text-center">
            <h1 className="text-2xl font-bold mb-4">
              Transação não encontrada
            </h1>
            <button
              onClick={() => router.push("/paravoce/transacoes")}
              className="bg-[#47A138] text-white px-4 py-2 rounded-md hover:bg-[#3a8a2e] mt-4"
            >
              Voltar
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const transacaoData = {
        id: transacao?.id,
        tipo: form.tipo,
        valor: parseFloat(form.valor),
        data: form.data,
        descricao: form.descricao,
        contaDestino: {
          numero: form.contaDestinoNumero,
          agencia: form.contaDestinoAgencia,
          chavePix: form.contaDestinoChavePix || undefined,
        },
      };

      const response = await fetch("/api/transacoes", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transacaoData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        alert(`Erro ao editar transação: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Erro ao editar transação:", error);
      alert("Erro ao editar transação. Tente novamente.");
    }
  };

  const labelWithOriginal = (label: string, original: string | undefined) => (
    <span>
      {label}
      {original !== undefined && original !== "" && (
        <span className="ml-2 text-gray-400 text-xs font-normal">
          - {original}
        </span>
      )}
    </span>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderAuthenticated />
      <div className="bg-[#e4e2e2] pt-10 pb-10 flex-1">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
            {" "}
            <h1 className="text-2xl font-bold mb-6">Editar Transação</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-1 font-semibold">
                    {labelWithOriginal("Tipo", transacao.tipo)}
                  </label>
                  <select
                    className="border rounded p-3 w-full"
                    value={form.tipo}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, tipo: e.target.value }))
                    }
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="PIX">PIX</option>
                    <option value="TED">TED</option>
                    <option value="Depósito">Depósito</option>
                    <option value="Transferência">Transferência</option>
                    <option value="Cartão de crédito">Cartão de crédito</option>
                    <option value="SAQUE">SAQUE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1 font-semibold">
                    {labelWithOriginal(
                      "Valor",
                      transacao.valor?.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })
                    )}
                  </label>
                  <input
                    className="border rounded p-3 w-full"
                    type="number"
                    value={form.valor}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, valor: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-semibold">
                    {labelWithOriginal("Data", formatarData(transacao.data))}
                  </label>
                  <input
                    className="border rounded p-3 w-full"
                    type="datetime-local"
                    value={form.data}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, data: e.target.value }))
                    }
                    required
                  />
                </div>

                {exigeDestino && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">
                      Dados do Destino
                    </h3>

                    {ehPix ? (
                      <div>
                        <label className="block text-sm mb-1 font-semibold">
                          {labelWithOriginal(
                            "Chave Pix",
                            transacao.contaDestino?.chavePix
                          )}
                        </label>
                        <input
                          className="border rounded p-3 w-full"
                          type="text"
                          value={form.contaDestinoChavePix}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              contaDestinoChavePix: e.target.value,
                            }))
                          }
                          placeholder="CPF, email, telefone ou chave aleatória"
                          required
                        />
                      </div>
                    ) : (
                      <>
                        <div>
                          <label className="block text-sm mb-1 font-semibold">
                            {labelWithOriginal(
                              "Conta Destino - Agência",
                              transacao.contaDestino?.agencia
                            )}
                          </label>
                          <input
                            className="border rounded p-3 w-full"
                            type="text"
                            value={form.contaDestinoAgencia}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                contaDestinoAgencia: e.target.value,
                              }))
                            }
                            placeholder="0000"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1 font-semibold">
                            {labelWithOriginal(
                              "Conta Destino - Número",
                              transacao.contaDestino?.numero
                            )}
                          </label>
                          <input
                            className="border rounded p-3 w-full"
                            type="text"
                            value={form.contaDestinoNumero}
                            onChange={(e) =>
                              setForm((f) => ({
                                ...f,
                                contaDestinoNumero: e.target.value,
                              }))
                            }
                            placeholder="000000-0"
                            required
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm mb-1 font-semibold">
                    {labelWithOriginal("Descrição", transacao.descricao)}
                  </label>
                  <textarea
                    className="border rounded p-3 w-full"
                    value={form.descricao}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, descricao: e.target.value }))
                    }
                    rows={2}
                    placeholder="Descrição da transação"
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => router.push("/paravoce/transacoes")}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#47A138] text-white rounded-md hover:bg-[#3a8a2e] focus:outline-none focus:ring-2 focus:ring-[#47A138] text-lg"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Sucesso!"
        message="Transação editada com sucesso!"
        buttonText="OK"
      />
    </div>
  );
}
