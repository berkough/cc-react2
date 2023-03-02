import { useState } from 'react';
import Comic from '../components/Comic';

export default function Collection(){
    const [issueList,setIssueList] = useState();
    return(
        <>
        {
            issueList.length >= 0 ? issueList.map((comic)=><Comic comic={comic}/>) : <h3>No comics in your collection.</h3>
        }
        </>
    )
}