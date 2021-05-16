import { useState } from 'react'

import BaseTemplate from 'templates/Base'

import { Task } from 'components/TaskCard'
import Wrapper from 'components/Wrapper'
import TaskCardList from 'components/TaskCardList'
import AddTaskForm from 'components/AddTaskForm'

import { tasks as mockTasks } from 'mocks/task'

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([...mockTasks])

  const handleAddNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const handleRemoveTask = (taskId: string | number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)

    setTasks([...updatedTasks])
  }

  return (
    <BaseTemplate>
      <Wrapper pb="6">
        <AddTaskForm expanded={!tasks.length} onSubmit={handleAddNewTask} />

        <TaskCardList tasks={tasks} onRemoveTask={handleRemoveTask} />
      </Wrapper>
    </BaseTemplate>
  )
}

export default Home
