import React from 'react';
import { Header } from "@components/header";
import {TodosPage} from "@pages/todos-page";

function App() {
  return (
      <>
        <Header />
        <main>
          <TodosPage />
        </main>
      </>
  );
}

export default App;
