"use client";

import { Footer } from "@/components/Footer";
import { HeaderLogado } from "@/components/header-logado";
import { NovaTransacaoForm, TipoTransacao } from "@/types/transacao";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NovaTransacaoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<NovaTransacaoForm>({
    tipo: "",
    valor: "",
    data: new Date().toISOString().split("T")[0],
    descricao: "",
    chavePix: "",
    agencia: "",
    numeroConta: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const tiposTransacao = [
    { value: TipoTransacao.SAQUE, label: "Saque" },
    { value: TipoTransacao.PIX, label: "PIX" },
    { value: TipoTransacao.TED, label: "TED" },
    { value: TipoTransacao.DEPOSITO, label: "Depósito" },
    { value: TipoTransacao.TRANSFERENCIA, label: "Transferência" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/transacoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          valor: parseFloat(formData.valor.replace(",", ".")),
        }),
      });

      if (response.ok) {
        router.push("/paravoce");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao criar transação");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar transação");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, "");
    const formatted = (parseInt(number) / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatted;
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setFormData((prev) => ({
      ...prev,
      valor: formatted,
    }));
  };

  const exigeDestino = formData.tipo && formData.tipo !== TipoTransacao.SAQUE;
  const ehPix = formData.tipo === TipoTransacao.PIX;

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderLogado />
      <div className="bg-[#e4e2e2] pt-10 pb-23 flex-1">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Nova Transação
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="tipo"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tipo de Transação *
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                >
                  <option value="">Selecione o tipo</option>
                  {tiposTransacao.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="valor"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Valor (R$) *
                </label>
                <input
                  type="text"
                  id="valor"
                  name="valor"
                  value={formData.valor}
                  onChange={handleValorChange}
                  placeholder="0,00"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                />
              </div>

              {exigeDestino && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900">
                    Dados do Destino
                  </h3>

                  {ehPix ? (
                    <div>
                      <label
                        htmlFor="chavePix"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Chave PIX *
                      </label>
                      <input
                        type="text"
                        id="chavePix"
                        name="chavePix"
                        value={formData.chavePix}
                        onChange={handleChange}
                        placeholder="CPF, email, telefone ou chave aleatória"
                        required
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label
                          htmlFor="agencia"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Agência *
                        </label>
                        <input
                          type="text"
                          id="agencia"
                          name="agencia"
                          value={formData.agencia}
                          onChange={handleChange}
                          placeholder="0000"
                          required
                          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="numeroConta"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Número da Conta *
                        </label>
                        <input
                          type="text"
                          id="numeroConta"
                          name="numeroConta"
                          value={formData.numeroConta}
                          onChange={handleChange}
                          placeholder="000000-0"
                          required
                          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="data"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Data *
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="descricao"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Descrição (opcional)
                </label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Descrição da transação"
                  className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent text-lg"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-6 py-3 bg-[#47A138] text-white rounded-md hover:bg-[#3a8a2e] focus:outline-none focus:ring-2 focus:ring-[#47A138] disabled:opacity-50 text-lg"
                >
                  {isLoading ? "Salvando..." : "Criar Transação"}
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
