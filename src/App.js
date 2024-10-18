import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from './config/routes';
import { TeacherProvider } from './contexts/TeacherContext';
function App() {
  return (
    <BrowserRouter>
      <TeacherProvider>
        <Routes>
          {PublicRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<route.layout> <route.element /> </route.layout>} />
            );
          })}
        </Routes>
      </TeacherProvider>
    </BrowserRouter>
  );
}

export default App;
