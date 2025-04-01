import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    const { name, email } = decoded;

    try {
      await axios.post('http://localhost:4000/usuarios', {
        nome: name,
        email: email
      });
      navigate('/painel');
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Sistema Inteligente de Apoio ao Ensino</h1>
      <p className="homepage-subtitle">Planos de Aula, Atividades e Correção Automatizada</p>
      <div className="login-box">
        <GoogleLogin onSuccess={handleLoginSuccess} onError={() => alert('Erro ao logar com Google')} />
      </div>
    </div>
  );
}

export default HomePage;