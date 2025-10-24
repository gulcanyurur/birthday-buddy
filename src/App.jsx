import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';

const App = () => {
 
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem('people');
    return saved ? JSON.parse(saved) : data;
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '', image: '' });

  // people değiştiğinde localStorage’a kaydet
  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.image) {
      alert('Please fill in all fields');
      return;
    }

    const newPerson = {
      id: new Date().getTime().toString(),
      name: formData.name,
      age: formData.age,
      image: formData.image,
    };

    // yeni kişiyi listeye ekle
    setPeople([...people, newPerson]);

    // formu sıfırla ve kapat
    setFormData({ name: '', age: '', image: '' });
    setShowForm(false);
  };

  const handleClear = () => {
    setPeople([]);
    localStorage.removeItem('people');
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />

        <div className="buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
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
            onClick={handleClear}
          >
            Clear All
          </button>
        </div>

     
        {showForm && (
          <form className="form" onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
            <div className="form-row">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                id="age"
                className="form-input"
                placeholder="Enter age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input
                type="text"
                id="image"
                className="form-input"
                placeholder="Paste image URL"
                value={formData.image}
                onChange={handleChange}
              />
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
