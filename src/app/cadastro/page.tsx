'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ✅ import

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* necessário para posicionar o close button */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const Illustration = styled.img`
  width: 380px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #222;
  font-weight: bold;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 25px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 17px;

  &:focus {
    outline: none;
    border-color: #47A138;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 15px;
  color: #333;

  a {
    color: #47A138;
    text-decoration: underline;
  }

  a:hover {
    color: #1F6313;
  }
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.disabled ? '#CCC' : '#47A138')};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#CCC' : '#3A8A2E')};
  }
`;

// Componente principal
export default function Cadastro() {
  const router = useRouter(); // ✅ useRouter dentro do componente
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const [aceite, setAceite] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aceite) {
      console.log('Form Data:', formData);
      // Aqui você pode enviar os dados para a API
    }
  };

  const handleClose = () => {
    router.back(); // ✅ volta para a página anterior
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <CloseButton onClick={handleClose}>
            <Image src="/close-button.svg" alt="Fechar" width={24} height={24} />
          </CloseButton>

          <Illustration src="/ilustracao-login.svg" alt="Criar Conta" />
          <Title>Preencha os campos abaixo para criar sua conta corrente!</Title>
          <Subtitle>É rápido, fácil e seguro.</Subtitle>

          <Input
            type="text"
            name="nome"
            placeholder="Digite seu nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />

          <CheckboxContainer>
            <input
              type="checkbox"
              id="termos"
              checked={aceite}
              onChange={() => setAceite(!aceite)}
            />
            <label htmlFor="termos">
              Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na{' '}
              <a href="#">Política de Privacidade</a> do banco.
            </label>
          </CheckboxContainer>

          <Button type="submit" disabled={!aceite}>
            Criar conta
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
