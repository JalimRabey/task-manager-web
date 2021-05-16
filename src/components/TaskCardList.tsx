import { Grid, Heading } from '@chakra-ui/layout'

import TaskCard, { Task } from 'components/TaskCard'

type TaskCardListProps = {
  tasks: Task[]
  onRemoveTask: (taskId: string | number) => void
  onCompleteTask: (taskId: string | number) => void
}

const TaskCardList = ({
  tasks,
  onRemoveTask,
  onCompleteTask
}: TaskCardListProps) => {
  if (!tasks.length) return null

  return (
    <>
      <Heading as="h1" textAlign="center" mt="4">
        Tasks
      </Heading>

      <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr']} gap="4" mt="6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            updatedAt={task.updatedAt}
            onDelete={onRemoveTask}
            onToggleComplete={onCompleteTask}
          />
        ))}
      </Grid>
    </>
  )
}

export default TaskCardList
