import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('Add Person clicked')}
          >
            Add Person
          </button>

          <button
            type="button"
            className="btn btn-hipster"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
