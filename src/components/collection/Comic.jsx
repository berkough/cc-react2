import Card from 'react-bootstrap/Card';

export default function Comic({comic}){
console.log('This is the Comic Component.');
console.log(comic);
    return(
        <Card style={{width: '18rem'}} id={comic.id}>
            <Card.Img variant='top' src={comic.image} />
            <Card.Body>
                <Card.Title>{comic.series.name} #{comic.number}</Card.Title>
                <Card.Text>
                    {comic.desc}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}