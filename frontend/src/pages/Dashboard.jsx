import './Dashboard.css';

const Dashboard = () => {
  const cards = [
    { title: 'Criar Atividade', description: 'Monte atividades baseadas nos materiais e planos de aula.' },
    { title: 'Gerenciar Turmas', description: 'Adicione, edite e acompanhe o progresso das suas turmas.' },
    { title: 'Planos de Aula', description: 'Crie planos personalizados com base na ementa.' },
    { title: 'Relatórios de Desempenho', description: 'Visualize e gere relatórios com base nas correções.' },
    { title: 'Materiais de Apoio', description: 'Gerencie PDFs, slides e livros utilizados em aula.' },
    { title: 'Feedback para Alunos', description: 'Escreva comentários personalizados nas atividades.' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel do Professor</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;