import { NextRequest, NextResponse } from 'next/server';
import { TipoTransacao, Conta, Transacao } from '@/types/transacao';

// Mock contas para simulação
const contasMock: Conta[] = [
  {
    id: '1',
    chavePix: 'paulo@bytebank.com',
    agencia: '0001',
    numero: '123456-7',
    saldo: 647729.40
  },
  {
    id: '2',
    chavePix: '11999887766',
    agencia: '0001',
    numero: '654321-0',
    saldo: 50000.00
  },
  {
    id: '3',
    agencia: '0002',
    numero: '789012-3',
    saldo: 25000.00
  }
];

// Mock database de transações
let transacoes: Transacao[] = [
  {
    id: '1',
    tipo: TipoTransacao.PIX,
    valor: 8294.50,
    data: '2025-10-04',
    descricao: 'PIX recebido',
    contaOrigem: contasMock[1],
    contaDestino: contasMock[0]
  },
  {
    id: '2',
    tipo: TipoTransacao.PIX,
    valor: 6674.90,
    data: '2025-10-02',
    descricao: 'PIX recebido',
    contaOrigem: contasMock[2],
    contaDestino: contasMock[0]
  },
  {
    id: '3',
    tipo: TipoTransacao.TED,
    valor: -1365.86,
    data: '2025-10-01',
    descricao: 'TED enviado',
    contaOrigem: contasMock[0],
    contaDestino: contasMock[2]
  },
  {
    id: '4',
    tipo: TipoTransacao.SAQUE,
    valor: -500.00,
    data: '2025-09-30',
    descricao: 'Saque no caixa eletrônico',
    contaOrigem: contasMock[0]
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const contaId = searchParams.get('contaId');

  await new Promise(resolve => setTimeout(resolve, 100));

  if (contaId) {
    const contaTransacoes = transacoes.filter(t => 
      t.contaOrigem?.id === contaId || t.contaDestino?.id === contaId
    );
    return NextResponse.json(contaTransacoes);
  }

  return NextResponse.json(transacoes);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.tipo || !body.valor || !body.data) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: tipo, valor, data' },
        { status: 400 }
      );
    }

    if (!Object.values(TipoTransacao).includes(body.tipo)) {
      return NextResponse.json(
        { error: 'Tipo de transação inválido' },
        { status: 400 }
      );
    }

    const contaOrigem = contasMock[0];
    let contaDestino: Conta | undefined;

    const tiposQueExigemDestino = [TipoTransacao.PIX, TipoTransacao.TED, TipoTransacao.DEPOSITO, TipoTransacao.TRANSFERENCIA];
    
    if (tiposQueExigemDestino.includes(body.tipo)) {
      if (body.tipo === TipoTransacao.PIX) {
        if (!body.chavePix) {
          return NextResponse.json(
            { error: 'Chave PIX é obrigatória para transações PIX' },
            { status: 400 }
          );
        }
        contaDestino = contasMock.find(conta => conta.chavePix === body.chavePix);
        if (!contaDestino) {
          return NextResponse.json(
            { error: 'Chave PIX não encontrada' },
            { status: 404 }
          );
        }
      } else {
        if (!body.agencia || !body.numeroConta) {
          return NextResponse.json(
            { error: 'Agência e número da conta são obrigatórios' },
            { status: 400 }
          );
        }
        contaDestino = contasMock.find(conta => 
          conta.agencia === body.agencia && conta.numero === body.numeroConta
        );
        if (!contaDestino) {
          return NextResponse.json(
            { error: 'Conta destino não encontrada' },
            { status: 404 }
          );
        }
      }
    }

    let valorFinal = parseFloat(body.valor);
    const tiposDebito = [TipoTransacao.SAQUE, TipoTransacao.TED, TipoTransacao.TRANSFERENCIA];
    
    if (tiposDebito.includes(body.tipo) || (body.tipo === TipoTransacao.PIX && valorFinal > 0)) {
      if (valorFinal > contaOrigem.saldo) {
        return NextResponse.json(
          { error: 'Saldo insuficiente' },
          { status: 400 }
        );
      }
      valorFinal = -Math.abs(valorFinal);
    }

    const novaTransacao: Transacao = {
      id: (transacoes.length + 1).toString(),
      tipo: body.tipo as TipoTransacao,
      valor: valorFinal,
      data: body.data,
      descricao: body.descricao || '',
      contaOrigem: contaOrigem,
      contaDestino: contaDestino
    };

    await new Promise(resolve => setTimeout(resolve, 300));

    if (valorFinal < 0) {
      contaOrigem.saldo += valorFinal;
    }
    if (contaDestino && valorFinal < 0) {
      contaDestino.saldo += Math.abs(valorFinal);
    }

    transacoes.push(novaTransacao);

    return NextResponse.json(novaTransacao, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}