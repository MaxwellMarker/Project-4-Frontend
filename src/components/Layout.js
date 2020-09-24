import React from 'react';

export default function Layout (props){

    return (
        <div>
            <header>
                <h1>Half-Baked</h1>
                <a className='homeLink' href='/recipes'>Home</a>
            </header>
            <div>
                {props.children}
            </div>
        </div>
    )
}