
import useFetch from "../hooks/useFetch"
import IssueItem from "../components/IssueItem"

export default function ViewTitle(){
    const {data, isLoading, error} = useFetch(`https://metron.cloud/api/series/${comic.id}/issue_list/?format=json`, {}, [])

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