import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </header>
      
      <main className="flex-grow overflow-y-auto  mb-[3rem]">
        {children} {/* This is where dynamic content is rendered */}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 z-10">
        <Footer />
      </footer>
    </div>

  );
};

export default Layout;
