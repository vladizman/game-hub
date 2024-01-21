import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import {Platform} from "../hooks/useGames"
import {HStack, Icon, Text} from "@chakra-ui/react"
import {IconType} from "react-icons"

interface Props {
  platforms: Platform[]
}

const CardIconList = ({platforms}: Props) => {
  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    linux: FaLinux,
    android: FaAndroid,
  }
  return (
    <HStack marginY={1}>
      {platforms.map(platform => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.400" />
      ))}
    </HStack>
  )
}

export default CardIconList
