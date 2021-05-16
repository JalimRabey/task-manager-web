import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button
} from '@chakra-ui/react'

type ConfirmRemoveTaskModalProps = {
  isOpen: boolean
  taskTitle: string
  taskIsCompleted: boolean
  onClose: () => void
  onRemove: () => void
}

const ConfirmRemoveTaskModal = ({
  isOpen,
  taskTitle,
  taskIsCompleted,
  onClose,
  onRemove
}: ConfirmRemoveTaskModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Are you sure?</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>You removing the "<b>{taskTitle}</b>" task!</Text>
        <Text>The task <b>{taskIsCompleted ? 'is' : 'is not'} completed</b>.</Text>
      </ModalBody>

      <ModalFooter>
        <Button mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="red" onClick={onRemove}>
          Delete
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default ConfirmRemoveTaskModal
