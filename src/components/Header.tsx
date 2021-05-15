import Link from 'next/link'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

import Wrapper from 'components/Wrapper'

const Header = () => (
  <Flex as="header" width="full" bg="gray.800">
    <Wrapper flexDirection="row" justifyContent="space-between" paddingY="4">
      <Link href="/" passHref>
        <ChakraLink as="a" width="44px" tabIndex={1}>
          <img src="/logo.png" alt="task logo" />
        </ChakraLink>
      </Link>

      <Link href="https://github.com/JalimRabey/task-manager-web" passHref>
        <ChakraLink target="_blank" tabIndex={1}>
          <FaGithub size="44" />
        </ChakraLink>
      </Link>
    </Wrapper>
  </Flex>
)

export default Header
