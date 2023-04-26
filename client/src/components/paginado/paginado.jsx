import React from "react";
import paginado from "./paginado.css";


export const Paginado = ({allDogs, dogsXPage, paginado}) => {
    const pageNum = [];

    for(let i=1; i<=Math.ceil(allDogs/dogsXPage); i++){
            pageNum.push(i);
    }

    // const getPaginationGroup = () => {
    //     if(currentPage === Math.ceil(allDogs/dogsXPage)) return;
    //     let start = Math.floor((currentPage - 1) / 5) * 5;
    //     return new Array(5).fill().map((_, idx) => start + idx + 1);
    // };

    return(
        <nav className="paginacion">

                {pageNum && pageNum.map(num => (
                        <button className="number" key = {num} onClick={()=> paginado(num)}>
                            {num}
                        </button>
                    )
                )}
                {/* {getPaginationGroup() && getPaginationGroup().map(num => (
                        <button className="number" key = {num} onClick={()=> paginado(num)}>
                            {num}
                        </button>
                    )
                )} */}
        </nav>
    )

}