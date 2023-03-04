import { FloatingLabel, FormControl, Row, Col } from 'react-bootstrap';

export default function SearchInput({doSearch}){
    return(
            <Row>
                <Col md>
                    <FloatingLabel controlId='floatingInput' label='Search' className='m-3'>
                        <FormControl type='text' placeholder='Search for a comic title...' onChange={(e)=>doSearch(e.target.value)} />
                    </FloatingLabel>
                </Col>
            </Row>
    )
}