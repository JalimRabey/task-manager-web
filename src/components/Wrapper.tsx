import { Flex } from '@chakra-ui/react'

type WrapperProps = {
	children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => (
	<Flex width="90%" maxW="container.lg" marginX="auto" flexDirection="column">
		{children}
	</Flex>
)

export default Wrapper
