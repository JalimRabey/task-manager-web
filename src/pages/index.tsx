import dynamic from 'next/dynamic'

const HomeTemplate = dynamic(() => import('templates/Home'), { ssr: false })

const Home = () => <HomeTemplate />

export default Home
