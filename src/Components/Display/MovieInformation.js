import {useEffect, useState} from "react";
import {GetMovieInformation} from "../Services/MovieService";
import {useParams} from "react-router";
import MainPanel from "./MainPanel";
import InfoPanel from "./InfoPanel";
import {Loading} from "../State/Loading";

function MovieInformation() {
    const { ID } = useParams();

    const [title, setTitle] = useState();
    const [tagline, setTagline] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [status, setStatus] = useState();
    const [runtime, setRuntime] = useState();
    const [companies, setProductionCompanies] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [overview, setOverview] = useState();
    const [revenue, setRevenue] = useState();
    const [budget, setBudget] = useState();
    const [homePage, setHomePage] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetMovieInformation(ID).then(response =>{
            console.log(response);
            setTitle(response['title']);
            setTagline(response['tagline']);
            setReleaseDate(response['release_date']);
            setStatus(response['status']);
            setRevenue(response['revenue']);
            setBudget(response['budget']);
            setRuntime(response['runtime']);
            setOverview(response['overview']);
            setTrailers(response['videos']['results']);
            setHomePage(response['homepage']);
            setProductionCompanies(response['production_companies']);
            setLoading(false);
        }).catch(() =>{
          alert('Something went wrong!')
        });
    }, [ID])

    return (
        <div className="container">
            {!loading ? <div>
                <div className="title-box">
                    <div className="movie-header-text">{title}</div>
                </div>
                <hr/>

                <div className="content-container-movie">
                    <MainPanel trailers={trailers}
                               overview={overview}
                               tagline={tagline}
                                status={status}/>

                    <InfoPanel title={title}
                               budget={budget}
                               revenue={revenue}
                               runtime={runtime}
                               homePage={homePage}
                               releaseDate={releaseDate}
                               companies={companies}/>
                </div>
            </div> : <Loading/>}
        </div>
    );
}

export default MovieInformation;
