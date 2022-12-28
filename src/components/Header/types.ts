import { Dispatch, SetStateAction } from 'react';
import { Task } from '../Task/types';

export interface HeaderProps {
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
