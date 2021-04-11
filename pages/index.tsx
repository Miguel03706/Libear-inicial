import Link from "next/link"
import { Image, Button} from "@chakra-ui/react";
import styles from "../styles/Home.module.scss"


export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Image src="images/polar.webp" />
      </div>
      <Link href="/">
      <Button colorScheme="blue">Button</Button>
      </Link>
      
      
    </>
  )
}
