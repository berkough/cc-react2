import { FloatingLabel, FormControl } from 'react-bootstrap';

export default function SearchInput({doSearch}){
    return(
            <FloatingLabel controlId='floatingInput' label='Search' className='mb-3'>
                <FormControl type='text' placeholder='Search for a comic title...' onChange={(e)=>doSearch(e.target.value)} />
            </FloatingLabel>
    )
}