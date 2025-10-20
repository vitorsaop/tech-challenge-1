"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { HeaderLogado } from "@/components/header-logado";
import { Footer } from "@/components/footer";

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

  const [form, setForm] = useState({
    tipo: "",
    valor: "",
    data: "",
    contaOrigemNumero: "",
    contaOrigemAgencia: "",
    contaOrigemChavePix: "",
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
            t?.data?.length > 10
              ? t.data.slice(0, 16)
              : t?.data
              ? t.data + "T00:00"
              : "",
          contaOrigemNumero: t?.contaOrigem?.numero || "",
          contaOrigemAgencia: t?.contaOrigem?.agencia || "",
          contaOrigemChavePix: t?.contaOrigem?.chavePix || "",
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
    return d.toLocaleDateString("pt-BR") + " - " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) + " hs";
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <HeaderLogado />
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
        <HeaderLogado />
        <div className="bg-[#e4e2e2] flex-1 flex items-center justify-center">
          <div className="bg-white p-8 rounded-[12px] shadow text-center">
            <h1 className="text-2xl font-bold mb-4">Transação não encontrada</h1>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode fazer um PUT/PATCH na API futuramente
    alert("Transação editada (mock)");
    router.push("/paravoce/transacoes");
  };

  const labelWithOriginal = (label: string, original: string | undefined) => (
    <span>
      {label}
      {original !== undefined && original !== "" && (
        <span className="ml-2 text-gray-400 text-xs font-normal">- {original}</span>
      )}
    </span>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderLogado />
      <div className="bg-[#e4e2e2] pt-10 pb-10 flex-1">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-[12px] shadow max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Editar Transação</h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primeira coluna */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Tipo", transacao.tipo)}
                    </label>
                    <select
                      className="border rounded p-1 w-full"
                      value={form.tipo}
                      onChange={(e) => setForm((f) => ({ ...f, tipo: e.target.value }))}
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
                      {labelWithOriginal("Valor", transacao.valor?.toLocaleString("pt-BR", { minimumFractionDigits: 2 }))}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="number"
                      value={form.valor}
                      onChange={(e) => setForm((f) => ({ ...f, valor: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Data", formatarData(transacao.data))}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="datetime-local"
                      value={form.data}
                      onChange={(e) => setForm((f) => ({ ...f, data: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Origem - Número", transacao.contaOrigem?.numero)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaOrigemNumero}
                      onChange={(e) => setForm((f) => ({ ...f, contaOrigemNumero: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Origem - Agência", transacao.contaOrigem?.agencia)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaOrigemAgencia}
                      onChange={(e) => setForm((f) => ({ ...f, contaOrigemAgencia: e.target.value }))}
                    />
                  </div>
                </div>
                {/* Segunda coluna */}
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Origem - Chave Pix", transacao.contaOrigem?.chavePix)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaOrigemChavePix}
                      onChange={(e) => setForm((f) => ({ ...f, contaOrigemChavePix: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Destino - Número", transacao.contaDestino?.numero)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaDestinoNumero}
                      onChange={(e) => setForm((f) => ({ ...f, contaDestinoNumero: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Destino - Agência", transacao.contaDestino?.agencia)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaDestinoAgencia}
                      onChange={(e) => setForm((f) => ({ ...f, contaDestinoAgencia: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Conta Destino - Chave Pix", transacao.contaDestino?.chavePix)}
                    </label>
                    <input
                      className="border rounded p-1 w-full"
                      type="text"
                      value={form.contaDestinoChavePix}
                      onChange={(e) => setForm((f) => ({ ...f, contaDestinoChavePix: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-semibold">
                      {labelWithOriginal("Descrição", transacao.descricao)}
                    </label>
                    <textarea
                      className="border rounded p-1 w-full"
                      value={form.descricao}
                      onChange={(e) => setForm((f) => ({ ...f, descricao: e.target.value }))}
                      rows={2}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-8">
                <button
                  type="submit"
                  className="bg-[#47A138] text-white px-4 py-2 rounded hover:bg-[#3a8a2e]"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/paravoce/transacoes")}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}  
