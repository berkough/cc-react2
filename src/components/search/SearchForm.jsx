import { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import SearchInput from './SearchInput';

export default function SearchForm({setData, fetch}){
    const [searchText, setSearchText] = useState('');
    
    const handleSubmit = () => {
        console.log('Submitting');
        if (searchText.length === 0){
            console.log('Error');
            return false;
        } else {
            setData(searchText);
            fetch();
        }
    }

    return(
        <Form>
            <SearchInput doSearch={setSearchText} />
            <Container><Row><Button onClick={handleSubmit} variant='primary' type='button'>Search</Button></Row></Container>
        </Form>
    )
}