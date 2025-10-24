import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);
  const [showForm, setShowForm] = useState(false); 

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />


        <div className="buttons">
          <button
            type="button"
            className="btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Close Form' : 'Add Person'}
          </button>

          <button
            type="button"
            className="btn btn-hipster"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>

        
        {showForm && (
          <form className="form" style={{ marginTop: '1.5rem' }}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter name" />
            </div>

            <div className="form-row">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" id="age" className="form-input" placeholder="Enter age" />
            </div>

            <div className="form-row">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input type="text" id="image" className="form-input" placeholder="Paste image URL" />
            </div>

            <button type="submit" className="btn btn-block">
              Add
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default App;

