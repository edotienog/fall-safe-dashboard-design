
import { Navigate } from 'react-router-dom';

// The index page just redirects to the Dashboard
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
