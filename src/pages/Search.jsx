import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import SearchForm from '../components/search/SearchForm';
import TitleEntry from '../components/search/TitleEntry';

export default function Search(){
    const [searchQuery, setSearchQuery] = useState(null);
    const {data, isLoading, error} = useFetch(`https://metron.cloud/api/series/?format=json&name=${searchQuery}`, {}, [])

    return(
        <>
            <SearchForm setData={setSearchQuery} />
            <div>
            {
                data && data.map((comic,i)=>{
                    return <TitleEntry comic={comic} key={i} />
                })
            }
            </div>
        </>
    )
}