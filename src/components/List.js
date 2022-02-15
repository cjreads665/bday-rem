import React from 'react';

const List = (props)=>{
    let people = props.people
    let list = people.map(person=>{
        let {id,name,age,image} = person
        // console.log(image);
        return <article className='person d-flex justify-content-around' key={id}>
           <img src={image} alt={name} />
            {name}
            <p>{age} years</p>
        </article>
    })
    return (
        <div>
            {list}
        </div>
    )
}

export default List