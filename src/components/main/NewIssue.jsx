import Card from 'react-bootstrap/Card';
import AddComicButton from '../global/AddComicButton';
import useFetch from '../../hooks/useFetch';

export default function NewIssue({comic}){
    const {data, isLoading, error} = useFetch(`https://metron.cloud/api/issue/${comic.id}/?format=json`)

    return(
        <Card style={{width: '18rem'}} id={data.id}>
            <Card.Img variant='top' src={data.image} />
            <Card.Body>
                <Card.Title>{data.series.name} #{data.number}</Card.Title>
                <Card.Text>
                    {data.desc}
                </Card.Text>
            </Card.Body>
            <AddComicButton />
        </Card>
    )
}