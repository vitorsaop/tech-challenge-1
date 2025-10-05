'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TipoTransacao, NovaTransacaoForm } from '@/types/transacao';

export default function NovaTransacaoModal() {
  const router = useRouter();
  const [formData, setFormData] = useState<NovaTransacaoForm>({
    tipo: '',
    valor: '',
    data: new Date().toISOString().split('T')[0],
    descricao: '',
    chavePix: '',
    agencia: '',
    numeroConta: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const tiposTransacao = [
    { value: TipoTransacao.SAQUE, label: 'Saque' },
    { value: TipoTransacao.PIX, label: 'PIX' },
    { value: TipoTransacao.TED, label: 'TED' },
    { value: TipoTransacao.DEPOSITO, label: 'Depósito' },
    { value: TipoTransacao.TRANSFERENCIA, label: 'Transferência' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/transacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          valor: parseFloat(formData.valor.replace(',', '.'))
        }),
      });

      if (response.ok) {
        router.back();
        // Aqui você pode adicionar um toast de sucesso
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Erro ao criar transação');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao criar transação');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, '');
    const formatted = (parseInt(number) / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatted;
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setFormData(prev => ({
      ...prev,
      valor: formatted
    }));
  };

  const exigeDestino = formData.tipo && formData.tipo !== TipoTransacao.SAQUE;
  const ehPix = formData.tipo === TipoTransacao.PIX;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nova Transação</h2>
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Transação *
            </label>
            <select
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
            >
              <option value="">Selecione o tipo</option>
              {tiposTransacao.map(tipo => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="valor" className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
            />
          </div>

          {exigeDestino && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Dados do Destino</h3>
              
              {ehPix ? (
                <div>
                  <label htmlFor="chavePix" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
                  />
                </div>
              ) : (
                <>
                  <div>
                    <label htmlFor="agencia" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="numeroConta" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
              Data *
            </label>
            <input
              type="date"
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
              Descrição (opcional)
            </label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descrição da transação"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A138] focus:border-transparent"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-[#47A138] text-white rounded-md hover:bg-[#3a8a2e] focus:outline-none focus:ring-2 focus:ring-[#47A138] disabled:opacity-50"
            >
              {isLoading ? 'Salvando...' : 'Criar Transação'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}