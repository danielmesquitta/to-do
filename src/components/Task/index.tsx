import React, { useCallback } from 'react';
import { TaskProps } from './types';
import styles from './styles.module.css';
import { CheckboxOutline, SquareOutline, TrashOutline } from 'react-ionicons';

export const Task: React.FC<TaskProps> = ({
  id,
  value,
  isChecked,
  setTasks,
}) => {
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskChecked = useCallback((id: number, isChecked: boolean) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((task) => task.id === id);

      const newList = prevTasks;

      newList[index].isChecked = !isChecked;

      return [...newList];
    });
  }, []);

  return (
    <li
      key={id}
      className={isChecked ? styles.listItemChecked : styles.listItem}
    >
      <button onClick={() => toggleTaskChecked(id, isChecked)}>
        {isChecked ? <CheckboxOutline /> : <SquareOutline />}
      </button>

      <span>{value}</span>

      <button onClick={() => deleteTask(id)}>
        <TrashOutline />
      </button>
    </li>
  );
};
