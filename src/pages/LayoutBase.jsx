import { Header } from "../components/Header/header"
import { Footer } from "../components/Footer/footer"


export function LayoutBase({ cards }) {
  return (
    <>
      <Header />
      <main className="card-container">
        {cards}
      </main>
      <Footer />
    </>
  );
}

