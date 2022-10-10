import React from 'react';
import Lampa from "./lampa";
// class Lampak extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             lampak: [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ]
//         }
//     }
//     clickHanddler(id) {
//         if (id > 2) {
//             this.kapcsolas(id - 3)

//         }
//         if (id < 6) {
//             this.kapcsolas(id + 3)
//         }
//         if (id % 3 !== 0) {
//             this.kapcsolas(id - 1)

//         }
//         if (id % 3 !== 2) {
//             this.kapcsolas(id + 1)

//         }
//         this.kapcsolas(id)
//         console.log(this.state.lampak)
//         this.forceUpdate()
//     }

//     kapcsolas(i) {
//         if (this.state.lampak[i]) {
//             this.state.lampak[i] = false
//         } else {
//             this.state.lampak[i] = true
//         }
//     }
//     render() {

//         return (
//             <div className='lampa-tarolo'>
//                 {this.state.lampak.map((lampa, i) => {
//                     return <Lampa elem={lampa} key={i} onClick={() => this.clickHanddler(i)} ></Lampa>
//                 })}
//             </div>
//         )
//     }
// }
import { useState } from 'react';
const Lampak = () => {
    const [lampak, setLampak] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ])
    function clickHanddler(id) {
        if (id > 2) {
            kapcsolas(id - 3)
        }
        if (id < 6) {
            kapcsolas(id + 3)
        }
        if (id % 3 !== 0) {
            kapcsolas(id - 1)
        }
        if (id % 3 !== 2) {
            kapcsolas(id + 1)
        }
        kapcsolas(id)
    }

    function kapcsolas(i) {
        if (lampak[i]) {
            lampak[i] = false
            setLampak([...lampak])
        } else {
            lampak[i] = true
            setLampak([...lampak])
        }
         console.log(lampak)
    }

    return (
        <div className='lampa-tarolo'>
            {console.log(lampak)}
            {lampak.map((lampa, i) => {
                return <Lampa elem={lampa} key={i} onClick={() => clickHanddler(i)} ></Lampa>
            })}
        </div>
    )
}

export default Lampak