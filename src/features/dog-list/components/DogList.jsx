import * as React from 'react'
import { Link } from 'react-router-dom'


export default function DogList(props) {
    return (
        <div>
            {
                props.dogs &&
                <ul>
                    {
                        props.dogs.map(dog => 
                        <li key={dog}><Link to={`/breeds/${dog}`}>{dog}</Link></li>
                        )
                    }
                </ul>
            }
        </div>
    )
}