import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="parent-container">
      {/* Компонент 1: Сверху слева */}
      <div className="component component-1">
        <h2>Компонент 1</h2>
        <p>Текст внутри компонента</p>
        <button className="neon-button">Кнопка</button>
      </div>

      {/* Компонент 2: Снизу слева */}
      <div className="component component-2">
        <h2>Компонент 2</h2>
        <p>Текст внутри компонента</p>
        <button className="neon-button">Кнопка</button>
      </div>

      {/* Компонент 3: По центру */}
      <div className="component component-3">
        <h2>Компонент 3</h2>
        <p>Текст внутри компонента</p>
        <button className="neon-button">Кнопка</button>
      </div>

      {/* Компонент 4: Сверху справа */}
      <div className="component component-4">
        <h2>Компонент 4</h2>
        <p>Текст внутри компонента</p>
        <button className="neon-button">Кнопка</button>
      </div>

      {/* Компонент 5: Снизу справа */}
      <div className="component component-5">
        <h2>Компонент 5</h2>
        <p>Текст внутри компонента</p>
        <button className="neon-button">Кнопка</button>
      </div>
    </div>
  );
};

export default App;