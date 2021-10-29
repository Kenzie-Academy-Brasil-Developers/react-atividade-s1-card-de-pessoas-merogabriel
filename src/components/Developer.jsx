import React from 'react'

export default function Developer({name, age, country}) {
    return (
        <div>
            <h2>Dev: {name}</h2>
            <h3>Idade: {age}</h3>
            <h3>Pais: {country}</h3>
        </div>
    )
}
