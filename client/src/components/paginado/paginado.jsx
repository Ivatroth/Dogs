import React from "react";
import paginado from "./paginado.css"

export const Paginado = ({allDogs, dogsXPage, paginado}) => {

    const pageNum = [];

    for(let i=1; i<=Math.ceil(allDogs/dogsXPage); i++){
            pageNum.push(i);
    }


    return(
        <nav className="paginacion">
            <ul> 
                {pageNum && pageNum.map(num => (
                        <li className="number" key = {num}>
                            <a className="active" onClick={()=> paginado(num)}>{num}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )

}