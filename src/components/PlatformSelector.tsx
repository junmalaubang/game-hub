import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/useGames"

interface Props {
    onselectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}


const PlatFormSelector = ({onselectPlatform, selectedPlatform}: Props) => {
    
    const {data, error} = usePlatforms();
    if(error) return (<>{false}</>);

    return (
    
        <Menu>
            <MenuButton  as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platform"}</MenuButton>
            <MenuList >
                {data.map(platform => <MenuItem onClick={() => onselectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )

}

export default PlatFormSelector;