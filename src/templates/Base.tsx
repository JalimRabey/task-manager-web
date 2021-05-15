import { Flex } from '@chakra-ui/react'

import Header from 'components/Header'

type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <Flex
    bg="gray.900"
    color="gray.50"
    width="full"
    height="full"
    minH="100vh"
    flexDirection="column"
  >
    <Header />

    <main>{children}</main>
  </Flex>
)

export default BaseTemplate
