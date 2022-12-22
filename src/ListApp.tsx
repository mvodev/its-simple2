import React, { useEffect, useState } from 'react';
import './ListApp.scss';
import List from './components/List/List';

const ListApp = () => {
  const MIN = 10;
  const MAX = 30;

  const [ durations, setDurations ] = useState<number[]>([]);

  const handleAddItem = () => {
    const prev = [...durations];
    const random = Math.floor(MIN + Math.random()*(MAX - MIN + 1));
    prev.push(random)
    setDurations(prev);
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    const newDurations = [...durations].map(elem => elem-1).filter(elem => elem > 0);
    setDurations(newDurations);
  }

  return (
    <>
    <h1 className="list-app__header">Task2 Its Simple</h1>
    <div className="list-app">
      <List listArray={durations}/>
      <button className="list-app__button" onPointerDown={handleAddItem}>ADD</button>
    </div>
    </>
  );
}

export default ListApp;

