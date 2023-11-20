import scheme from "../../img/triangle.png";
import React, { useState } from 'react'
import { Side } from '../common/Side';
import { TriangleReset } from './TriangleReset';

export const Triangle = () => {

    const [sideA, setSideA] = useState(3);
    const [sideB, setSideB] = useState(4);
    const [sideC, setSideC] = useState(5);



    const sideUpdate = (side, value) => {

      switch (side) {
        case "A":
          if ( (sideA+value) > 0 && (sideA+value) < (sideB+sideC) ) {
            setSideA(sideA+value);
          }
          break;
          case "B":
          if ( (sideB+value) > 0 && (sideB+value) < (sideA+sideC) ) {
            setSideB(sideB+value);
          }
          break;
          case "C":
          if ( (sideC+value) > 0 && (sideC+value) < (sideB+sideA) ) {
            setSideC(sideC+value);
          }
          break;
          default:
      };

    };

    const reset = () => {
      setSideA(3);
      setSideB(4);
      setSideC(5);
    }

    const triangleSquare = () => {

      if ( sideA < 1 || sideB < 1 || sideC < 1 ||
          sideA >= (sideB+sideC) || sideB >= (sideA+sideC) || sideC >= (sideB+sideA) ) {
            return "Imposible triangle!";
          }

      const p = (sideA+sideB+sideC)/2;

      return "S = " + (Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC)));

    }

  return (
    <div className='triangle'>
      <div className='triangle__view'>
        <img src={scheme} alt="" />
      </div>
      <div className='triangle__formula'>
        Formula:<br/>
        S=SQRT(p(p-a)(p-b)(p-c)), p=(a+b+c)/2
      </div>
      <div className='triangle__square'>
        Result:<br/>
      <span>{triangleSquare()} </span>
      </div>
      <div className='triangle__sides'>
        <Side side={"A"} value={sideA}  setSide={sideUpdate} /> 
        <Side side={"B"} value={sideB}  setSide={sideUpdate} /> 
        <Side side={"C"} value={sideC}  setSide={sideUpdate} /> 
        <TriangleReset reset={reset} />
      </div>
    </div>
  )
  
}
