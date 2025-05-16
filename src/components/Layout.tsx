
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <div className="bg-gray-200 p-4 md:w-64 md:min-h-screen">
        <div className="text-xl font-bold mb-8 border-b border-gray-400 pb-2">
          Fall Prevention System
        </div>
        <nav className="space-y-4">
          <NavLink to="/" currentPath={location.pathname} label="Dashboard" />
          <NavLink to="/residents/1" currentPath={location.pathname} label="Resident Profiles" />
          <NavLink to="/alerts" currentPath={location.pathname} label="Alert History" />
          <NavLink to="/settings" currentPath={location.pathname} label="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  label: string;
}

const NavLink = ({ to, currentPath, label }: NavLinkProps) => {
  const isActive = 
    (to === '/' && currentPath === '/') || 
    (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link 
      to={to}
      className={`block p-2 rounded-md border border-gray-400 ${
        isActive ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-300'
      }`}
    >
      {label}
    </Link>
  );
};

export default Layout;
