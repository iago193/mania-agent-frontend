import { Route, Routes } from 'react-router-dom';
import Agents from '../pages/agents';

function Router() {
  return (
    <Routes>
      <Route path="/dashboard">
        <Route path="agents" element={<Agents />} />
      </Route>
    </Routes>
  );
}

export default Router;
