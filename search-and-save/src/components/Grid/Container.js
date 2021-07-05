import React from 'react'; 

//Container comp allows bootstrap s class names! 
export function Container({fluid, children}) {
    return <div className={`container${fluid ? -"fluid" : ""}`}>{children}</div>; 
}