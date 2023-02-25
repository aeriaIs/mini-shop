import { About, Feature, Footer, Header, Hero, Highlight } from "../components/landing";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Highlight />
      <Feature />
      <Footer />
    </div>
  );
}
export default HomePage;
