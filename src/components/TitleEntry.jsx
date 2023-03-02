import { Link } from 'react-router-dom';
export default function TitleEntry({comic,i}){
    return(
        <p id={i}>
           <Link to={}>{comic.series}</Link>
        </p>
    )
}