export interface Task {
  ID: number;
  title: string;
  description?: string;
  isDone: boolean;
  date: Date;
}
