"use client";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ import
import React, { useState } from "react";
import styled from "styled-components";

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

// Componente principal
export default function Cadastro() {
  const router = useRouter(); // ✅ useRouter dentro do componente
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [aceite, setAceite] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aceite) {
      console.log("Form Data:", formData);
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
            <Image
              src="/close-button.svg"
              alt="Fechar"
              width={24}
              height={24}
            />
          </CloseButton>

          <Illustration src="/ilustracao-login.svg" alt="Criar Conta" />
          <Title>
            Preencha os campos abaixo para criar sua conta corrente!
          </Title>
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

          <Checkbox>
            <input
              type="checkbox"
              id="termos"
              checked={aceite}
              onChange={() => setAceite(!aceite)}
            />
            <label htmlFor="termos">
              Li e estou ciente quanto às condições de tratamento dos meus dados
              conforme descrito na <a href="#">Política de Privacidade</a> do
              banco.
            </label>
          </Checkbox>

          <Button type="submit" disabled={!aceite}>
            Criar conta
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
