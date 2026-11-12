import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-[300px_1fr] min-h-screen">
        <div className="bg-amber-300">
          <h2>TESTE</h2>
        </div>
        <div className="bg-blue-700 p-4">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
