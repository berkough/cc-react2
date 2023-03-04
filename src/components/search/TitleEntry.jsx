import { Link } from 'react-router-dom';
export default function TitleEntry({comic,i}){
    return(
        <div id={i}>
           <Link to={`/viewtitle/${comic.id}`} state={{from: comic}}>{comic.series}</Link>
        </div>
    )
}