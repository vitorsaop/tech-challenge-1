export enum TipoTransacao {
  SAQUE = "SAQUE",
  DEPOSITO = "DEPOSITO",
  TRANSFERENCIA = "TRANSFERENCIA",
  TED = "TED",
  PIX = "PIX"
}

export interface Conta {
  id: string;
  chavePix?: string;
  agencia: string;
  numero: string;
  saldo: number;
}

export interface Transacao {
  id: string;
  tipo: TipoTransacao;
  valor: number;
  data: string; // ISO 8601 format
  descricao?: string;
  contaOrigem?: Conta;
  contaDestino?: Conta;
}

export interface NovaTransacaoForm {
  tipo: TipoTransacao | '';
  valor: string;
  data: string;
  descricao: string;
  chavePix: string;
  agencia: string;
  numeroConta: string;
}