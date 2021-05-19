import { Button, Checkbox, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

import ConfirmRemoveTaskModal from 'components/ConfirmRemoveTaskModal'

export type Task = {
  id: string | number
  completed: boolean
  title: string
  description: string
  updatedAt: string | Date
}

export type TaskCardProps = {
  onToggleComplete: (taskId: string | number) => void
  onDelete: (taskId: string | number) => void
} & Task

const TaskCard = ({
  id,
  completed,
  title,
  description,
  updatedAt,
  onToggleComplete,
  onDelete
}: TaskCardProps) => {
  const {
    isOpen: isConfirmationModalOpen,
    onOpen: onOpenConfirmationModal,
    onClose: onCloseConfirmationModal
  } = useDisclosure()

  const handleToggleComplete = () => {
    onToggleComplete(id)
  }

  const handleDeleteButtonClick = () => {
    onOpenConfirmationModal()
  }

  const handleCloseConfirmationModal = () => {
    onCloseConfirmationModal()
  }

  const handleDeleteTask = () => {
    onDelete(id)
  }

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        border="1px"
        borderColor="teal.500"
        borderRadius="sm"
        paddingTop="4"
        paddingBottom="2"
      >
        <div>
          <Flex as="header" paddingRight="6" paddingLeft="4">
            <Checkbox
              display="flex"
              width="full"
              flexDirection="row-reverse"
              justifyContent="space-between"
              isChecked={completed}
              onChange={handleToggleComplete}
            >
              <Text
                as="h2"
                fontWeight="bold"
                size="md"
                isTruncated
                noOfLines={1}
                whiteSpace="normal"
                paddingRight="2"
                textDecoration={completed ? 'line-through' : 'none'}
              >
                {title}
              </Text>
            </Checkbox>
          </Flex>

          <Text paddingX="6" mt="2">
            {description}
          </Text>
        </div>

        <Flex
          as="footer"
          paddingLeft="6"
          paddingRight="2"
          mt="4"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Updated at {updatedAt}</Text>

          <Button
            variant="ghost"
            color="red.500"
            _hover={{ backgroundColor: 'trasparent', color: 'red.700' }}
            onClick={handleDeleteButtonClick}
          >
            <FaTrash />
          </Button>
        </Flex>
      </Flex>

      <ConfirmRemoveTaskModal
        taskTitle={title}
        taskIsCompleted={completed}
        isOpen={isConfirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        onRemove={handleDeleteTask}
      />
    </>
  )
}

export default TaskCard
