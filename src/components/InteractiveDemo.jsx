import React, { useState, useEffect } from 'react';

const initialItems = [
  { id: 1, title: 'Landing Page Comercial', category: 'Web', likes: 12 },
  { id: 2, title: 'Portfolio de Fotografía', category: 'Diseño', likes: 25 },
  { id: 3, title: 'Calculadora Financiera', category: 'App', likes: 8 },
  { id: 4, title: 'Documentación Técnica', category: 'Docs', likes: 17 },
];

export default function InteractiveDemo() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('react_static_demo_items');
    return saved ? JSON.parse(saved) : initialItems;
  });
  const [filter, setFilter] = useState('Todos');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Web');

  useEffect(() => {
    localStorage.setItem('react_static_demo_items', JSON.stringify(items));
  }, [items]);

  const handleLike = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, likes: item.likes + 1 } : item));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory,
      likes: 0
    };
    setItems([newItem, ...items]);
    setNewTitle('');
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = filter === 'Todos' 
    ? items 
    : items.filter(item => item.category === filter);

  return (
    <section id="demo" className="demo-section">
      <div className="section-header">
        <h2 className="section-title">Demostración Interactiva (Estado Local)</h2>
        <p className="section-subtitle">
          React gestiona el estado y la persistencia en el navegador usando <code>localStorage</code> sin necesidad de base de datos.
        </p>
      </div>

      <div className="demo-card">
        {/* Formulario para agregar item */}
        <form onSubmit={handleAddItem} className="demo-form">
          <input 
            type="text" 
            placeholder="Título del proyecto..." 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="input-text"
          />
          <select 
            value={newCategory} 
            onChange={(e) => setNewCategory(e.target.value)}
            className="select-category"
          >
            <option value="Web">Web</option>
            <option value="Diseño">Diseño</option>
            <option value="App">App</option>
            <option value="Docs">Docs</option>
          </select>
          <button type="submit" className="btn-add">➕ Agregar</button>
        </form>

        {/* Filtros */}
        <div className="filter-buttons">
          {['Todos', 'Web', 'Diseño', 'App', 'Docs'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de elementos */}
        <div className="items-grid">
          {filteredItems.length === 0 ? (
            <p className="empty-message">No hay proyectos en esta categoría.</p>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="item-card">
                <div className="item-header">
                  <span className="item-tag">{item.category}</span>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className="btn-delete"
                    title="Eliminar elemento"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="item-title">{item.title}</h4>
                <div className="item-footer">
                  <button onClick={() => handleLike(item.id)} className="btn-like">
                    ❤️ {item.likes}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

