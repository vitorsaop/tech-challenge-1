"use client";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  position: relative;
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
  width: 400px;
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

const ErrorMessage = styled.div`
  width: 100%;
  padding: 12px;
  background-color: #ffe5e5;
  color: #d32f2f;
  border: 1px solid #d32f2f;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 15px;
`;

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [lembrar, setLembrar] = useState(false);
  const [error, setError] = useState(""); // estado para mensagem de erro

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulando verificação de login
    if (formData.email === "usuario@email.com" && formData.senha === "123456") {
      console.log("Login bem-sucedido", formData);
      setError("");
      // Redireciona ou faz outra ação
    } else {
      setError("Email ou senha incorretos. Por favor, tente novamente.");
    }
  };

  const handleClose = () => {
    router.back();
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

          <Illustration src="/ilustracao-cadastro.svg" alt="Login" />
          <Title>Bem-vindo de volta!</Title>
          <Subtitle>Faça login para acessar sua conta.</Subtitle>

          {error && <ErrorMessage>{error}</ErrorMessage>}

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
              id="lembrar"
              checked={lembrar}
              onChange={() => setLembrar(!lembrar)}
            />
            <label htmlFor="lembrar">Lembrar-me</label>
          </Checkbox>

          <Button type="submit" disabled={!formData.email || !formData.senha}>
            Entrar
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
