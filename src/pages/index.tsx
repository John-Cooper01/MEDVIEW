import { Flex, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie'
import * as animationData from '../../public/medical5.json'

export default function Home() {
  const router = useRouter()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'>
      <Flex
        width='100%'
        maxWidth={450}
        borderRadius={8}
        flexDir='column'>

        <Box w='450px' h='450px' onClick={() => router.push('/dashboard')}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 130
            }}
          >
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false} />
          </motion.div>
        </Box>
      </Flex>

    </Flex>
  )
}
