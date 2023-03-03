import { Card } from 'react-bootstrap';

export default function IssueItem({comic}){
    return(
        <Card style={{width: '18rem'}} id={comic.id}>
        <Card.Body>
            <Card.Title>{comic.issue}</Card.Title>
            <Card.Text>
                {comic.cover_date}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}