import { Container, Row, Button } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import NewIssue from '../components/global/NewIssue';

export default function Main(){
    var date = new Date();

    const {data, loading, error, fetch} = useFetch(`https://metron.cloud/api/issue/?format=json&cover_month=${date.getMonth()+1}&cover_year=${date.getFullYear()}`);

    if(loading) return <h1>Loading...</h1>
    if(error) console.log(error)

    return(
        <Container>
        <Row><Button onClick={fetch}>Get New Comics</Button></Row>
        <Row>
        <div className='d-inline-flex flex-wrap justify-content-center'>
            {
                data && data.results.slice(0,5).map((comic, i)=>{
                    return <NewIssue comic={comic} key={i} />
                })
            }
        </div>
        </Row>
        </Container>
    )
}