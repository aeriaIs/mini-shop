import { About, Feature, Footer, Header, Hero, Highlight } from "./Landing";

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
