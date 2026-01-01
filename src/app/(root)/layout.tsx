import Footer from "@/components/Footer";
import StreamClientProvider from "@/components/providers/StreamClientProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StreamClientProvider>
      {children}
      <Footer />
    </StreamClientProvider >
  );
}
export default Layout;