import React from "react"
const Lampa = (props) => {
    let clasname = ""
    if (props.elem) {
        clasname = 'lampa felkapcsolva'
        
    }
    else {
        clasname = 'lampa'
    }
    return (
        <div className={clasname}  onClick = {props.onClick}  >
        </div>
    )
}
export default Lampa