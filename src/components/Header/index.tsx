import React, { useCallback, useState } from 'react';
import styles from './styles.module.css';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = useCallback(() => {
    if (!inputValue) return alert('Preencha uma tarefa');

    const newTask = {
      id: Math.random(),
      value: inputValue,
      isChecked: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);

    setInputValue('');
  }, [inputValue]);

  return (
    <header className={styles.header}>
      <input
        className={styles.input}
        value={inputValue}
        placeholder="Digite sua tarefa"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className={styles.button} onClick={addTask}>
        Adicionar
      </button>
    </header>
  );
};
