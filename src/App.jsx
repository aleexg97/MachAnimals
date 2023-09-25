import "../src/App.css";
import { Header } from "./componentes/header";
import { Twitter } from "./twitter";
import { Inicio } from "./componentes/Inicio";
import { Footer } from "./componentes/Footer"; 
import { Tipo } from "./componentes/Tipo";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export function App(){


    return(
        <>
        <Router>

            <nav><Header/></nav>
            <body><Inicio/></body>
            <footer><Footer/></footer>

            <Twitter nombre="KIRA" tipo="Perro" estado={true}/>
            <Twitter nombre="Odin" tipo="Gato" estado={false}/>

            <Routes>
                <Route path="/" element={<Inicio></Inicio>}/>
                <Route path="/tipo" element={<Tipo></Tipo>}></Route>
            </Routes>
        
        </Router>
           
        </>
        
    );
}
