import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css'; // Import CSS file

// Define the type for the Layout component props
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main className='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
