import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Sidebar />
      <div className="about-content">
        <h1>Sobre o Projeto</h1>
        <p>
          Este projeto é um simulador de estoque desenvolvido em React utilizando Vite. O objetivo do projeto é fornecer uma interface intuitiva para gerenciar produtos em estoque, permitindo adicionar, editar, remover e visualizar produtos.
        </p>
        <h2>Desenvolvedores</h2>
        <p>
          Este projeto foi desenvolvido por Guilherme Henrique como parte do curso de React.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;