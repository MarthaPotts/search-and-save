import React from 'react'; 

//this Row comp allows BS s classNames !
export function Row({fluid, children}) {
    return <div className={`row${fluid ? "-fluid": ""}`}>{children}</div>; 
}
