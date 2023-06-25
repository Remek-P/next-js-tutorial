import Header from "@/components/layout/Header";

function Layout({ children }) {
  return (
      <>
        <Header />
        <main>
          {children}
        </main>
      </>
  );
}

export default Layout;