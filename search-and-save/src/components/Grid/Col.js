import React from 'react'; 

//Col comp allows bootstrap columns with less syntax
export function Col({size, children}) {
    return(
        <div
        className={size
        .split(' ')
        .map(sizze => "col-" + size)
        .join(' ')}
        >
            {children}
        </div>
    ); 
}