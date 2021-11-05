import {NoResults} from "../Alerts/NoResults";
import {HighlightText} from "../Regex/HighlightText";
import missingImage from "../../Images/NO_IMAGE_FOUND.png";

export const MovieBox = ({results, filter}) => {
    const searchWord = filter.Search ? filter.Search : "" ;

    if(results.length === 0){
        return (<NoResults/>)
    }

    return results.map(function (data) {
        const id = data['id'];
        const adult = data['adult'];
        const backdrop_path = data['backdrop_path'];
        const original_language = data['original_language'];
        const original_title = data['original_title'];
        const overview = data['overview'];
        const popularity = data['popularity'];
        const release_date = data['release_date'];
        const title = data['title'];
        const vote_average = data['vote_average'];
        const vote_count = data['vote_count'];

        let src;
        if(backdrop_path){
            src = "http://image.tmdb.org/t/p/w500/" + backdrop_path;
        }else{
            src = missingImage;
        }

        return (
            <div className="content-card-body">
                <div className="card-info">

                    <div className="content-card-image">
                        <img src={src} alt="MOVIE"/>
                    </div>

                    <div className="content-card-info responsive-text">
                        <h4><b>Course information</b></h4>
                        <p><b>Name:</b> {HighlightText(title, searchWord)}</p>
                        <p><b>Overview:</b> {overview}</p>
                    </div>

                    <div className="content-card-info responsive-text">
                        <h4><b>Other</b></h4>
                        <p><b>Adult:</b> {adult ? "Contains adult content." : "Does not contain adult content"} </p>
                        <p><b>Original Language:</b> {original_language} </p>
                        <p><b>Original Title:</b> {original_title} </p>
                        <p><b>Release Date:</b> {release_date} </p>
                    </div>

                    <div className="content-card-info responsive-text">
                        <h4><b>Scoring</b></h4>
                        <p><b>Popularity: </b> {popularity}</p>
                        <p><b>Vote Average: </b> {vote_average}</p>
                        <p><b>Vote Count: </b> {vote_count}</p>
                    </div>

                    <div className="content-card-info-buttons">
                        <form action={"/info/" + id} >
                            <button className="button-style-1" type="submit">Movie Information</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    });
}
