# ✈️ Aerocode - Sistema de Gestão de Produção de Aeronaves

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![CLI](https://img.shields.io/badge/Interface-CLI-black?style=for-the-badge)](https://en.wikipedia.org/wiki/Command-line_interface)

O Aerocode, um sistema CLI em TypeScript, foi feito para simplificar a gestão aeroespacial direto no terminal.
Projetado para assumir o comando de todo o ciclo de vida de aeronaves civis e militares, ele vai muito além de 
um simples banco de registros: atua como o motor que orquestra as etapas de engenharia, gerencia a alocação de
peças, rastreia a validação de testes de qualidade e gera relatórios finais de entrega de forma automatizada e precisa.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### 1. Clonar o repositório e instalar dependências
No terminal, escolha a pasta onde deseja baixar o projeto e execute:
```bash
- git clone [https://github.com/matheussd1/AV1.git](https://github.com/matheussd1/AV1.git)
- cd AV1
- npm install
```

### 2. Iniciar o sistema
Para rodar o projeto diretamente via terminal usando o compilador TypeScript:

```Bash
- npx ts-node src/index.ts
```

---

### 🔐 Credenciais de Acesso
O sistema possui uma trava de segurança. Ao rodar o projeto pela primeira vez (com o banco de dados vazio), um administrador padrão é criado automaticamente para o primeiro acesso:

Usuário: admin
Senha: admin123

---

### 📋 Funcionalidades do Sistema (Menu CLI)
O sistema conta com um menu interativo completo para gerenciar toda a linha de produção:

- Cadastrar nova Aeronave: Registro com validação para impedir códigos duplicados.
- Listar Aeronaves: Exibição do status atual da frota e quantidades de peças/etapas associadas.
- Cadastrar Funcionário: Criação de novos usuários com definição de permissões (ação restrita apenas a Administradores).
- Adicionar Peça: Vinculação de componentes (Nacionais/Importados) a uma aeronave específica.
- Registrar Etapa de Produção: Avanço lógico das etapas de montagem.
- Realizar Teste: Validação de qualidade (Elétrico, Hidráulico, Aerodinâmico) com status de Aprovado/Reprovado.
- Gerar Relatório de Entrega: Exportação automática de um documento .txt consolidando todo o histórico de produção da aeronave pronta.
- Sair e Salvar: Encerramento seguro da aplicação.

---

### ⚠️ Regras de Negócio e Segurança Aplicadas

- Unicidade: O sistema trava a tentativa de registrar aeronaves com o mesmo código identificador.
- Autorização: A criação de novos funcionários é bloqueada para usuários que não possuam a flag NivelPermissao.ADMINISTRADOR.
- Padronização: Uso massivo de enums para garantir que o banco de dados não sofra com erros de digitação de status.
- Segurança de Dados: O sistema salva o estado da fábrica no arquivo dados_aerocode.txt a cada inserção.

---

### 📚 Conceitos Aplicados

- Programação Orientada a Objetos (POO)
- Encapsulamento
- Tipagem estática
- Manipulação de arquivos
- Estrutura modular
- CLI (Command Line Interface)

---

### 👨‍💻 Autor

Projeto desenvolvido como Atividade de Avaliação Prática, por Matheus Dias.
