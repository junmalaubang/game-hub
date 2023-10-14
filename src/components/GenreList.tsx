import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}: Props)=> {
    const {data, isLoading} = useGenres();

    if(isLoading) return <Spinner />
    
    return (
        <List>
            {data.map(genre => 
            <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                    <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={8}/>
                    <Button onClick={()=> onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem> )}
        </List>
    )
}

export default GenreList;