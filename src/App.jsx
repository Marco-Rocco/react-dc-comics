import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

const linksHeader = [
  "CHARACTERS",
  "COMICS",
  "MOVIES",
  "TV",
  "GAMES",
  "COLLECTIBLES",
  "VIDEOS",
  "FANS",
  "NEWS",
  "SHOP",
]

function App() {

  return (
    <>
      <Header headerArray={linksHeader} />
      <Main />
      <Footer />
    </>
  )
}

export default App
