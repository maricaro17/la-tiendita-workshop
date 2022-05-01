import React, { Component } from 'react'
import { url } from '../helpers/url'
import Cards from './Card'

export default class List extends Component {
    constructor() {
        super()
        this.state = {
            articulos: []
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        console.log(datos)

        this.setState({
            articulos: datos
        })
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {this.state.articulos.map((elem, index) => (
                        <Cards fruta={elem} key={index} />))}
                </div>
            </div>
        );
    }
}