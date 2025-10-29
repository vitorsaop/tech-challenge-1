# Tech Challenge 1

Este projeto é uma aplicação web desenvolvida com Next.js e TypeScript, focada em funcionalidades de cadastro, login, gerenciamento de transações e visualização de balanço. O projeto utiliza Storybook para documentação de componentes, Vitest para testes e segue boas práticas de organização de código.

## Estrutura do Projeto

```
eslint.config.mjs           # Configuração do ESLint
next-env.d.ts               # Tipagens Next.js
next.config.ts              # Configuração do Next.js
package.json                # Dependências e scripts
postcss.config.mjs          # Configuração do PostCSS
README.md                   # Documentação do projeto
tsconfig.json               # Configuração do TypeScript
vitest.config.ts            # Configuração do Vitest
vitest.shims.d.ts           # Tipagens para Vitest
public/                     # Arquivos públicos (imagens, favicon, etc)
src/
	app/                      # Páginas e rotas da aplicação
		globals.css             # Estilos globais
		layout.tsx              # Layout principal
		not-found.tsx           # Página de erro 404
		page.tsx                # Página inicial
		api/                    # Rotas de API
			transacoes/           # API de transações
				route.ts            # Lógica da rota de transações
		cadastro/               # Página de cadastro
			page.tsx
		login/                  # Página de login
			page.tsx
		paravoce/               # Área "Para Você" com subrotas
			layout.tsx
			page.tsx
			@modal/               # Modais
				default.tsx
				(.)nova-transacao/  # Modal de nova transação
					page.tsx
			editar/               # Edição de transação
				[id]/
					page.tsx
			nova-transacao/       # Página de nova transação
				page.tsx
			transacoes/           # Página de listagem de transações
				page.tsx
	components/               # Componentes reutilizáveis
		BalanceCard.tsx
		ConfirmModal.tsx
		footer.tsx
		header-logado.tsx
		header.tsx
		Modal.tsx
		navbar.tsx
		SuccessModal.tsx
		ToggleEyeButton.tsx
	context/                  # Contextos React
		BalanceVisibilityContext.tsx
	data/                     # Dados estáticos
		servicosdisponiveis.json
		vantagens.json
	stories/                  # Componentes e histórias do Storybook
		Button.stories.ts
		Button.tsx
		Header.stories.ts
		Header.tsx
		Page.stories.ts
		Page.tsx
		assets/
			avif-test-image.avif
		button.css
		header.css
		page.css
		Configure.mdx
	types/                    # Tipagens TypeScript
		transacao.ts
```

## Principais Tecnologias

- **Next.js**: Framework React para aplicações web modernas
- **TypeScript**: Tipagem estática para JavaScript
- **Storybook**: Documentação e visualização de componentes
- **Vitest**: Testes unitários e integração
- **ESLint**: Padronização e qualidade de código
- **PostCSS**: Processamento de CSS

## Scripts Disponíveis

Veja o arquivo `package.json` para todos os scripts disponíveis. Exemplos comuns:

```bash
# Iniciar o servidor de desenvolvimento
npm run dev

# Rodar testes
npm run test

# Iniciar Storybook
npm run storybook
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Para visualizar os componentes no Storybook:
   ```bash
   npm run storybook
   ```

## Dados de Login para Teste

Para acessar o app, utilize as credenciais abaixo:

- **Email:** usuario@email.com
- **Senha:** 123456

## Estrutura de Páginas

- `/cadastro`: Página de cadastro de usuário
- `/login`: Página de login
- `/paravoce`: Área do usuário com funcionalidades de transações, edição e modais
- `/paravoce/nova-transacao`: Criar nova transação
- `/paravoce/transacoes`: Listar transações
- `/paravoce/editar/[id]`: Editar transação

## Contribuição

Sinta-se à vontade para abrir issues e pull requests. Certifique-se de seguir o padrão de código definido pelo ESLint.

## Licença

Este projeto está sob a licença MIT.
