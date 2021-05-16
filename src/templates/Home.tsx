import { useEffect, useState } from 'react'

import BaseTemplate from 'templates/Base'

import { Task } from 'components/TaskCard'
import Wrapper from 'components/Wrapper'
import TaskCardList from 'components/TaskCardList'
import AddTaskForm from 'components/AddTaskForm'

import TasksResources from 'services/resources/task'

const HomeTemplate = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddNewTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask]

    setTasks(updatedTasks)
    TasksResources.save(updatedTasks)
  }

  const handleRemoveTask = (taskId: string | number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)

    setTasks([...updatedTasks])
    TasksResources.save([...updatedTasks])
  }

  useEffect(() => {
    const savedTasks = TasksResources.getAll()
    setTasks([...savedTasks])
  }, [])

  return (
    <BaseTemplate>
      <Wrapper pb="6">
        <AddTaskForm expanded={!tasks.length} onSubmit={handleAddNewTask} />

        <TaskCardList tasks={tasks} onRemoveTask={handleRemoveTask} />
      </Wrapper>
    </BaseTemplate>
  )
}

export default HomeTemplate
