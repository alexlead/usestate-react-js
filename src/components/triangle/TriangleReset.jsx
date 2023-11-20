import React from 'react'

export const TriangleReset = ( { reset } ) => {
  return (
    <div className='triangle__sides__reset'>
        <button
        onClick={ () => {
            reset();
        }
        }
        >
            Reset
            </button>
    </div>
  )
}
