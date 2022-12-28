import './global.css';

import styles from './App.module.css';
import { CheckboxOutline, TrashOutline, SquareOutline } from 'react-ionicons';

import { useCallback, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Task as TaskType } from './components/Task/types';
import { Task } from './components/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const concludedTasksPercentage = useMemo(() => {
    if (!tasks.length) return 0;

    return Math.round(
      (tasks.filter(({ isChecked }) => isChecked).length / tasks.length) * 100,
    );
  }, [tasks]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO LIST</h1>

      <Header setTasks={setTasks} />

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} setTasks={setTasks} {...task} />
        ))}
      </ul>

      <footer className={styles.footer}>
        {`Tarefas concluídas: ${concludedTasksPercentage}%`}
      </footer>
    </div>
  );
};

export default App;
