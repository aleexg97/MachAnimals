import "../src/App.css";
import { Header } from "./componentes/header";
import { Twitter } from "./twitter";
import { Inicio } from "./componentes/Inicio";

export function App(){

    return(
        <>
            <Header></Header>
            <Inicio></Inicio>
            <Twitter nombre="KIRA" tipo="Perro" estado={true}/>
            <Twitter nombre="Odin" tipo="Gato" estado={false}/>
        </>
        
    );
}
