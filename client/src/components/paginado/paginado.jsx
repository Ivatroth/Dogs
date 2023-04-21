import React from "react";

export const Paginado = ({allDogs, dogsXPage, paginado}) => {

    const pageNum = [];

    for(let i=1; i<=Math.ceil(allDogs/dogsXPage); i++){
            pageNum.push(i);
    }

    return(
        <nav>
            <ul> 
                {pageNum && pageNum.map(num => (
                        <li className="number" key = {num}>
                        <a onClick={()=> paginado(num)}>{num}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )

}