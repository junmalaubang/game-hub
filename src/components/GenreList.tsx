import { HStack, Image, List, ListItem, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image.url";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props)=> {
    const {data, isLoading, error} = useGenres();

    if(error) return (<>{false}</>);
    
    if(isLoading) return <Spinner />
    
    return (
        <>
        <Heading fontSize='2xl' marginBottom= {3}>Genres</Heading>
        <List>
            {data.map(genre => 
            <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                    <Image 
                    src={getCroppedImageUrl(genre.image_background)} 
                    boxSize={'32px'} 
                    borderRadius={8}
                    objectFit='cover'
                    />
                    <Button whiteSpace='normal' textAlign="left" fontWeight={selectedGenre?.id === genre.id? 'bold': 'normal'} onClick={()=> onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem> )}
        </List>
        </>
    )
}

export default GenreList;