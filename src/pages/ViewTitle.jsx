
import useFetch from '../hooks/useFetch';
import IssueItem from '../components/viewtitle/IssueItem';
import { useLocation } from 'react-router-dom';

export default function ViewTitle(){
    
    const location = useLocation();
    const { from } = location.state;

    console.log(from);

    const {data, isLoading, error} = useFetch(`https://metron.cloud/api/series/${from.id}/issue_list/?format=json`, {}, [])

    return(
        <div>
            {
                data && data.map((comic)=>{
                    return <IssueItem comic={comic} />
                })
            }
        </div>
    )
}