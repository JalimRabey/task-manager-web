import { Task } from 'components/TaskCard'

const TASK_KEY = 'task_key'

const save = (tasks: Task[]) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks))
}

const getAll = (): Task[] => {
  const savedTasks = localStorage.getItem(TASK_KEY)
  console.log({ savedTasks })

  return !!savedTasks ? JSON.parse(savedTasks) : []
}

export default {
  save,
  getAll
}
