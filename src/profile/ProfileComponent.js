import React from 'react';




export default function ProfileComponent(props){
    return(
        <div>
             <h1> Welcome{props.name}</h1>
        <h2> bio: {props.bio}</h2>  
        <h3>  profession:{props.profession}</h3>
        <a onClick={e=>props.handleName(props.name)} > Click me </a>
        <h4>image:{props.children}</h4>
        </div>
       
    );

}
