import Trailer from "./Trailer";

function MainPanel({trailers, overview, tagline, status}){
    return (
        <div className="movie-flex-item">
            <div className="movie-content">
                <div className="movie-container">
                    <h1>Overview</h1>
                    <p>{overview}</p>

                    <h1>Tagline</h1>
                    <p>{tagline}</p>

                    <h2>Status</h2>
                    <p>{status}</p>

                    <h1>Trailers</h1>

                    <Trailer trailers={trailers}/>
                </div>
            </div>
        </div>
    )
}

export default MainPanel;