
import useFetch from '../hooks/useFetch';
import NewIssue from '../components/global/NewIssue';
import { useLocation } from 'react-router-dom';
import useRunOnce from '../hooks/useRunOnce';

export default function ViewTitle(){
    
    const location = useLocation();
    const { from } = location.state;

    console.log(from);

    const {data, loading, error, fetch} = useFetch(`https://metron.cloud/api/series/${from.id}/issue_list/?format=json`);

    useRunOnce({
        fn: ()=>{
            fetch();
        }
    });

    return(
        <div>
            {
                data && data.results.map((comic, i)=>{
                    return <NewIssue comic={comic} key={i} />
                })
            }
        </div>
    )
}