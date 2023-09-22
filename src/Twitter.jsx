import { useState } from "react";

export function Twitter({nombre = "unkow",tipo = "unknow"}){

    let imagenCompleta = "src/img/"+nombre+".png";
    let buttonClassName = "";
    let texto = "";

    let [estado,setEsatdo] = useState(false);

    switch(estado){
        case true :
            buttonClassName = "btn-siguiendo";
            texto = "Siguiendo";
            break;
        case false : 
            buttonClassName = "btn-seguir";
            texto = "Seguir";
    }

    function handleClick(){
        setEsatdo(!estado);
    }

    return(
        <article className="article-twiiter">
            <header>
                <img className="img-twitter" src={imagenCompleta}></img>
                <strong>{nombre}</strong>
                <span>@{tipo}</span>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {texto} 
                </button>
            </aside>

        </article>
    )
}