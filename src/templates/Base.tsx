import { Flex } from '@chakra-ui/react'

type BaseTemplateProps = {
	children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
	<Flex bg="gray.900" color="gray.50" width="full" height="full" minH="100vh" flexDirection="column">
		{children}
	</Flex>
)

export default BaseTemplate
