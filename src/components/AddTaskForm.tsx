import { useState, ChangeEvent, FormEvent } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  FormControl,
  Input,
  Textarea,
  Flex,
  Button
} from '@chakra-ui/react'

import { Task } from 'components/TaskCard'

const initialFormData = {
  title: '',
  description: ''
}

type AddTaskFormProps = {
  expanded?: boolean
  onSubmit: (task: Task) => void
}

const AddTaskForm = ({ expanded = false, onSubmit }: AddTaskFormProps) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!formData.title || !formData.description) return

    const task: Task = {
      ...formData,
      id: new Date().getTime(),
      completed: false,
      updatedAt: new Date().toLocaleString()
    }

    onSubmit(task)
    setFormData(initialFormData)
  }

  return (
    <Accordion allowToggle defaultIndex={expanded ? [0] : undefined}>
      <AccordionItem>
        <AccordionButton>
          <Heading flex="1" textAlign="left" fontSize="xl">
            Add new task
          </Heading>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <FormControl as="form" onSubmit={handleSubmit}>
            <Input
              mt="2"
              id="field-title"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <Textarea
              mt="4"
              placeholder="Description"
              id="field-description"
              resize="horizontal"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <Flex alignItems="center" justifyContent="flex-end">
              <Button type="submit">Add</Button>
            </Flex>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddTaskForm
