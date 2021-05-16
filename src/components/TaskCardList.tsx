import { Grid } from '@chakra-ui/layout'
import { useState } from 'react'

import TaskCard, { Task } from 'components/TaskCard'

import { tasks as mockTasks } from 'mocks/task'

const TaskCardList = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  const handleRemoveTask = (taskId: string | number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)

    setTasks([...updatedTasks])
  }

  return (
    <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr']} gap="4" mt="6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          updatedAt={task.updatedAt}
          onDelete={handleRemoveTask}
        />
      ))}
    </Grid>
  )
}

export default TaskCardList
