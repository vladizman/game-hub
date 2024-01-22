import {Menu, MenuList, MenuButton, MenuItem, Button} from "@chakra-ui/react"
import {BsChevronDown} from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
        <MenuItem>item1</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector
