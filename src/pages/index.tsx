import { Heading } from '@chakra-ui/layout'

import BaseTemplate from 'templates/Base'

import Wrapper from 'components/Wrapper'
import TaskCardList from 'components/TaskCardList'

const Home = () => (
  <BaseTemplate>
    <Wrapper>
      <Heading as="h1" textAlign="center" mt="4">Tasks</Heading>

      <TaskCardList />
    </Wrapper>
  </BaseTemplate>
)

export default Home
