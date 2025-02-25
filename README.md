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


1. Front-end (React) - client/src/

components/:
student/:
Dashboard.js: Exibe resumo das atividades, desempenho e eventos.
Tasks.js: Lista tarefas pendentes e concluídas, com filtros e busca.
Grades.js: Apresenta notas e gráficos de desempenho por matéria.
Schedule.js: Mostra o cronograma semanal com eventos e prazos.
Attendance.js: Exibe histórico de presença e frequência.
Materials.js: Biblioteca de materiais filtráveis por matéria e tipo.
teacher/:
Dashboard.js: Resumo das turmas, atividades e alunos.
CreateActivity.js: Formulário para criar atividades com diferentes tipos de questões.
GradeActivity.js: Interface para correção de atividades e feedback.
Reports.js: Gráficos e tabelas de desempenho dos alunos.
Attendance.js: Registro de presença e faltas dos alunos.
director/:
Dashboard.js: Visão geral das turmas, usuários e relatórios.
ManageUsers.js: CRUD para professores e alunos, com filtros e busca.
ManageClasses.js: CRUD para turmas e disciplinas, com alocação de professores.
AdvancedReports.js: Relatórios detalhados de desempenho acadêmico e frequência.
common/:
LoginForm.js: Formulário de login com validação e opções de acesso.
Navbar.js: Barra de navegação com menus e links para as funcionalidades.
Card.js: Componente reutilizável para exibir informações em cards.
Modal.js: Componente para exibir janelas modais com informações ou formulários.
Table.js: Componente para exibir dados em tabelas com paginação e filtros.
Chart.js: Componente para exibir gráficos de desempenho.
FileInput.js: Componente para upload de arquivos.
services/:
api.js: Abstração para chamadas à API do back-end.
auth.js: Lógica de autenticação e gerenciamento de tokens.
materialService.js: Lógica para baixar e visualizar os materiais do banco de dados MongoDB.
contexts/:
AuthContext.js: Contexto para gerenciar o estado de autenticação do usuário.
DataContext.js: Contexto para compartilhar dados entre componentes.
hooks/:
useAuth.js: Hook personalizado para acessar o contexto de autenticação.
useData.js: Hook personalizado para acessar o contexto de dados.
useForm.js: Hook personalizado para lidar com formulários.
utils/:
helpers.js: Funções auxiliares para formatação de datas, validação de dados, etc.
assets/:
images/: Imagens e ícones utilizados na interface.
fonts/: Fontes personalizadas.
2. Back-end (Node.js) - server/

controllers/:
studentController.js: Lógica para as rotas do aluno.
teacherController.js: Lógica para as rotas do professor.
directorController.js: Lógica para as rotas da diretoria.
authController.js: Lógica para autenticação e autorização.
activityController.js: Lógica para criação, edição e correção de atividades.
gradeController.js: Lógica para gerenciamento de notas.
attendanceController.js: Lógica para gerenciamento de presença.
materialController.js: Lógica para gerenciamento de materiais no MongoDB.
models/:
student.js: Modelo de dados para alunos.
teacher.js: Modelo de dados para professores.
director.js: Modelo de dados para diretores.
activity.js: Modelo de dados para atividades.
grade.js: Modelo de dados para notas.
attendance.js: Modelo de dados para presença.
material.js: Modelo de dados para materiais (MongoDB).
class.js: Modelo de dados para turmas.
user.js: Modelo de dados para usuários.
routes/:
studentRoutes.js: Rotas para as funcionalidades do aluno.
teacherRoutes.js: Rotas para as funcionalidades do professor.
directorRoutes.js: Rotas para as funcionalidades da diretoria.
authRoutes.js: Rotas para autenticação e autorização.
activityRoutes.js: Rotas para atividades.
gradeRoutes.js: Rotas para notas.
attendanceRoutes.js: Rotas para presença.
materialRoutes.js: Rotas para materiais.
config/:
database.js: Configurações de conexão com MongoDB e MySQL.
auth.js: Configurações de autenticação e geração de tokens.
ai.js: Configurações de conexão com o serviço de IA.
services/:
aiService.js: Serviço de IA para correção automática de atividades.
emailService.js: Serviço para envio de emails (notificações, recuperação de senha).
fileService.js: Serviço para upload e download de arquivos.
middlewares/:
authMiddleware.js: Middleware para verificar a autenticação do usuário.
errorMiddleware.js: Middleware para tratamento de erros.
utils/:
helpers.js: Funções auxiliares para criptografia, geração de tokens, etc.
3. Bancos de dados - database/

mongodb/:
collections/:
materials.json: Dados dos materiais em formato JSON.
mysql/:
migrations/: Scripts SQL para criar e atualizar o esquema do banco de dados.
seeds/: Scripts SQL para popular o banco de dados com dados iniciais.
4. Outros arquivos

.env: Variáveis de ambiente (chaves de API, configurações de banco de dados).
README.md: Documentação do projeto.
package.json e package-lock.json: Gerenciamento de dependências.
.gitignore: Arquivos e pastas a serem ignorados pelo Git.