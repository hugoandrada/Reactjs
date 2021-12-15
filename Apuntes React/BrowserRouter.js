
/*
1 - instalar browser router
npm install react-router-dom@6

------------------------------------------------------------
*/

/*
2 - importar browser router en el archivo
import { BrowserRouter } from "react-router-dom";

---------------------------------------------------------------
*/

/*
3 - colocar las etiquetar browser router en el archivo
 <BrowserRouter>
    <App />
  </BrowserRouter>,
  -------------------------------------------------------------
*/

/*
4 - Definir las rutas a los componentes
---------------------------------------------------------------

import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="about" exact element={ <About/> } />
        <Route path="contact" exact element={ <Contact/> } />
      </Routes>
    </div>
  )
}
--------------------------------------------------------------------
*/

/*
5 - Usar Link para navegar a las rutas desde el Home

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}
--------------------------------------------------------------------
*/