import React from 'react'

const List = ({ people }) => {
  return (
    <div>
        {people.map((person) => {   
          const { id, name, age } = person;

          return (
            <article key={id}>
              <h4>{name}</h4>
              <p>{age} years</p>
              <br />
            </article>
          );
        })}
    </div>
  )
}

export default List;
