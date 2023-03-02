import React, { createContext, useState } from 'react';

const IssueListContext = createContext();

function IssueListProvider(props){
    const [issueList, setIssueList] = useState([]);

    return(
        <IssueListProvider value={{issueList, setIssueList}}>
            {props.children}
        </IssueListProvider>
    )
}
export {IssueListContext, IssueListProvider}