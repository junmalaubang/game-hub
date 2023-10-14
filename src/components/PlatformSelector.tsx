import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"


const PlatFormSelector = () => {
    
    const {data, error} = usePlatforms();
    if(error) return (<>{false}</>);

    return (
    
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )

}

export default PlatFormSelector;