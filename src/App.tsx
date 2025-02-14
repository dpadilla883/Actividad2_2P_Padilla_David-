import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import PublicationsPage from './components/Pages/PublicationsPage';
import AdminPage from './components/Pages/AdminPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/publications" element={<ProtectedRoute><PublicationsPage /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPage /></ProtectedRoute>} />
            {/* Redirige a la página de inicio si la ruta no coincide */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

// Componente para proteger rutas
interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: 'admin';
}

function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    // Si no hay usuario autenticado, redirige al login
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Si el usuario no tiene el rol requerido, muestra un mensaje de acceso denegado
    return <div>Acceso denegado.</div>;
  }

  return <>{children}</>;
}


export default App;