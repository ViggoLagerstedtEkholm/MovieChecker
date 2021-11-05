import {NoResults} from "../Search/NoResults";

function Trailer({trailers}){
    if(trailers.length === 0){
        return (<NoResults/>)
    }

    return trailers.map(function (data, i) {
        const videoID = data['key'];
        const name = data['name'];
        const official = data['official'];
        return (
            <div key={i}>
                <hr/>
                <p>{name}</p>
                {official ? <h2>Official</h2> : null}
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${videoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        )
    });
}


export default Trailer;