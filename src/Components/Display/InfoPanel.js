function InfoPanel({title, budget, revenue, runtime, homePage, releaseDate, companies}){

    function Companies(){
        return companies.map(function (data, i) {
            const name = data['name'];
            return(
              <div key={i} className="company-name">
                  <h1>{name}</h1>
              </div>
            )
        });
    }

    return (
        <div className="info-fixed">
            <div className="movie-side-information">
                <p>{title}</p>
                <hr/>

                <h2>Financials</h2>
                <h3>Budget</h3>
                <p>{budget}</p>

                <hr/>

                <h3>Revenue</h3>
                <p>{revenue}</p>

                <hr/>

                <h2>Other</h2>
                <h3>Runtime</h3>
                <p>{runtime} (Minutes)</p>

                <h3>Homepage</h3>
                <a href={homePage} >{homePage}</a>

                <h3>Release Date</h3>
                <p>{releaseDate}</p>

                <h3>Companies</h3>
                {Companies()}
            </div>
        </div>
    )
}

export default InfoPanel;