import { Flex, FlexProps } from '@chakra-ui/react'

type WrapperProps = {
	children: React.ReactNode
} & FlexProps

const Wrapper = ({ children, ...props }: WrapperProps) => (
	<Flex width="90%" maxW="container.lg" marginX="auto" flexDirection="column" {...props}>
		{children}
	</Flex>
)

export default Wrapper
