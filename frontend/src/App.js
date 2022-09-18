// import { getRequest } from './utils/requests'
import PropertyList from './components/PropertyList';

function App() {
  return (
    <div>
      <header>
        <span>LOGO</span>
        <div>
          <p>Seu apartamento mobiliado pronto para morar</p>
          <p>Apartamentos completos em São Paulo, Rio de Janeiro e Brasília desenhados para você se sentir em casa</p>
        </div>
      </header>
      <main className="asd">
        <p className="title">Tenha a experiencia de um Edifício Tabas</p>
        <PropertyList />
      </main>
    </div>
  );
}

export default App;
