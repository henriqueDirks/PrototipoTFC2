# PrototipoTFC2

# Funcionalidades da Plataforma Escolar

## Tela do Aluno:

A tela do aluno será moderna e intuitiva, proporcionando fácil acesso às informações acadêmicas e às atividades.

### Estilo e Posição dos Elementos:

- **Plano de Fundo:** Azul claro (#E3F2FD) para um ambiente agradável.
- **Container Principal:** Card branco centralizado com bordas arredondadas e sombra suave.
- **Título:** "Painel do Aluno" no topo do container, centralizado e em negrito.
- **Cards de Funções:** Cada funcionalidade terá um card individual com ícone e descrição.
- **Botões de Ação:** Destacados com azul escuro (#0F172A) e animação ao passar o mouse.

### Funcionalidades:

- **Tarefas e Atividades:** Listagem de atividades pendentes e concluídas, com prazos destacados.
- **Desempenho Acadêmico:** Gráficos de evolução com cores indicativas.
- **Cronograma:** Agenda semanal com eventos importantes.
- **Boletim:** Notas detalhadas por matéria e feedbacks.
- **Presença:** Histórico de presença e percentual de frequência.
- **Materiais:** Biblioteca virtual com materiais filtráveis.

---

## Tela do Professor:

A tela do professor oferecerá ferramentas para gerenciar atividades e acompanhar o desempenho dos alunos.

### Estilo e Posição dos Elementos:

- **Plano de Fundo:** Azul médio (#1E40AF) para um visual profissional.
- **Container Principal:** Card branco com bordas arredondadas e sombra suave.
- **Título:** "Painel do Professor" no topo do container, centralizado.
- **Cards de Funções:** Cada funcionalidade representada por um card interativo.

### Funcionalidades:

- **Criação de Atividades:** Formulário dinâmico para criação de questões.
- **Correção Automática:** Avaliação automática baseada em IA.
- **Relatórios:** Gráficos de desempenho individual e coletivo.
- **Agenda:** Planejamento de aulas e prazos de atividades.
- **Ficha de Presença:** Registro de presenças e faltas.

---

## Tela da Diretoria:

A tela da diretoria será focada no gerenciamento acadêmico, permitindo a administração das turmas e relatórios.

### Estilo e Posição dos Elementos:

- **Plano de Fundo:** Azul escuro (#0F172A) para um design sério e profissional.
- **Container Principal:** Card branco grande, com botões e campos de entrada organizados.
- **Título:** "Painel da Diretoria" no topo do container, centralizado.
- **Cards de Funções:** Organizadores de funcionalidades com animação de destaque ao passar o mouse.

### Funcionalidades:

- **Criação de Turmas:** Cadastro e gerenciamento de turmas e disciplinas.
- **Gerenciamento de Usuários:** Adição e edição de professores e alunos.
- **Relatórios Avançados:** Estatísticas detalhadas sobre desempenho acadêmico.

---

## Tela de Login:

A tela de login da plataforma escolar será moderna, intuitiva e responsiva, garantindo acessibilidade a diferentes dispositivos.

### Estilo e Posição dos Elementos:

- **Plano de Fundo:** Azul (#1E3A8A), criando um contraste agradável para leitura.
- **Container Central:** Card branco com bordas arredondadas e sombra leve.
- **Logo da Plataforma:** No topo do card, alinhado ao centro.
- **Campos de Entrada:**
  - **E-mail ou Nome de Usuário:** Campo de entrada arredondado.
  - **Senha:** Campo de senha com opção de visualização (ícone de "olho").
- **Botão de Acesso:** Azul escuro (#0F172A), texto branco, animação ao passar o mouse.
- **Opções Adicionais:**
  - "Lembrar-me" à esquerda.
  - "Esqueci minha senha" à direita.
- **Acesso Alternativo:** Login via Google e Microsoft.
- **Rodapé:** Informações de contato e suporte.

### Funcionalidade:

- **Validação em Tempo Real:** Mensagens de erro para campos incorretos.
- **Autenticação Segura:** HTTPS e senhas criptografadas.
- **Redirecionamento Automático:** Direciona o usuário ao painel correspondente.

---

## Arquitetura da Aplicação:

- **Front-end:** React para uma interface interativa e responsiva.
- **Back-end:** Node.js para gerenciar funcionalidades e comunicação com o banco de dados.
- **Banco de Dados:**
  - **MongoDB:** Armazena materiais apresentados em sala.
  - **MySQL:** Gerencia usuários, turmas, notas e presença.

