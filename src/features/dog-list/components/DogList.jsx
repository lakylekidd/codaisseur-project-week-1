import * as React from 'react'
import { Link } from 'react-router-dom'


export default function DogList(props) {
    return (
        <div className="wrapper">
            <h1>List of Breeds</h1>
            <Link to="/">back to home</Link>
            {
                props.dogs &&
                <ul>
                    {
                        props.dogs.map(dog =>
                            // <li key={dog}><Link to={`/breeds/${dog}`}>{dog}</Link></li>
                            <Link to={`/breeds/${dog}`} key={dog}><li>{dog}</li></Link>
                        )
                    }
                </ul>
            }
        </div>
    )
}