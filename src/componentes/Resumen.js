import React, {Component} from "react"
import {primeraMayuscula} from "../helper"

class Resumen extends Component {
    render(){
        const {marca, year, plan} = this.props.datos
        return(
            <div>
                { (marca && year && plan) &&
                    <div>
                        <div className="resumen">
                            <h2>Resumen de Cotización</h2>
                            <li>Marca: {primeraMayuscula(marca)}</li>
                            <li>Plan: {primeraMayuscula(plan)}</li>
                            <li>Año de Auto: {year}</li>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Resumen