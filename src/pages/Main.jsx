import { useState } from 'react';
import { Spinner, Container, Button } from 'react-bootstrap'
import useFetch from '../hooks/useFetch';
import NewIssue from '../components/main/NewIssue';

export default function Main(){
    const [mainComics,setMainComics] = useState(null);
    const [getNew, setGetNew] = useState(false);
    
    var date = new Date();
    console.log(date.getMonth()+1);
    console.log(date.getFullYear());
    const {data, isLoading, error} = useFetch(`https://metron.cloud/api/issue/?format=json&cover_month=${date.getMonth()+1}&cover_year=${date.getFullYear()}`, {}, [getNew]);
    console.log(error);

    const handleSubmit = () => {
        console.log('Submitting');
        if (!getNew){
            setGetNew(true);
        } else {
            setGetNew(false);
        }
    }

    return(
        <Container>
            <Button onClick={handleSubmit}>Get New Comics</Button>
            { isLoading &&
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
            {   setMainComics(data) &&
                mainComics.map((comic)=>{
                    return <NewIssue comic={comic}/>
                })
            }
        </Container>
    )
}