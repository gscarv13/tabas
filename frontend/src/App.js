import PulseLoader from "react-spinners/PulseLoader";

import Header from './components/Header/Header';
import PropertyList from './components/PropertyList/PropertyList';

import useProperty from './hooks/useProperty';

import styles from './App.module.css';

function App() {
  const { isLoading } = useProperty()

  return (
    <div>
      <Header />
      <main className={styles.container}>
        { 
          !isLoading ?  <PropertyList /> : <PulseLoader size={15} loading={isLoading} color="var(--accent)" />
        }
      </main>
    </div>
  );
}

export default App;
