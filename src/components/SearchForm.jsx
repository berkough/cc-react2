import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SearchInput from './SearchInput';

export default function SearchForm({setData}){
    const [searchText, setSearchText] = useState('');
    
    const handleSubmit = () => {
        console.log('Submitting');
        if (searchText.length == 0){
            console.log('Error');
            return false;
        } else {
            setData(searchText);
        }
    }

    return(
        <Form>
            <SearchInput doSearch={setSearchText} />
            <Button onClick={handleSubmit} variant='primary' type='button'>Search</Button>
        </Form>
    )
}