import {useContext, useEffect, useState} from "react";
import FilterBox from "./FilterBox";
import PaginationBox from "./Pagination/PaginationBox";
import {FindMovieSearch, FetchMovies} from "../Services/MovieService";
import {Info} from "./Pagination/Info";
import Message from "../Alerts/Message";
import {Loading} from "./State/Loading";
import {FilterContext} from "../Context/FilterContext";

const FilterContent = ({displayBox, showFilterBox}) => {
    const [message, setMessage] = useState("");
    const [totalPagesCount, setTotalPages] = useState(0);
    const [totalResultsCount, setTotalResults] = useState(0);
    const [topRatedMovies, setResults] = useState([]);

    const [hasLoaded, setHasLoaded] = useState(false);
    const [paginationLoading, setPaginationLoading] = useState(false);

    const DisplayBox = displayBox;

    const {filter} = useContext(FilterContext);

    useEffect(() => {
        doSearch();
    }, [filter.Page, filter.Order, filter.Search, filter.MinRating, filter.MinRatingCount])

    const onSetFilters = (updatedFilter) => {
        setHasLoaded(false);
        filter.Search = updatedFilter.Search;
        filter.MinRating = updatedFilter.MinRating;
        filter.Order = updatedFilter.Order;
        filter.MinRatingCount = updatedFilter.MinRatingCount;
        doSearch();
    }

    const onGoToPage = (page) => {
        filter.Page = parseInt(page, 10);
        setPaginationLoading(true);
        doSearch();
    }

    const onNextPage = () =>{
        filter.Page = filter.Page + 1;
        setPaginationLoading(true);
    }

    const onPreviousPage = () =>{
        filter.Page = filter.Page - 1;
        setPaginationLoading(true);
    }

    const doSearch = () => {
        if(filter.Search){
            FindMovieSearch(filter.Search).then(response =>{
                filter.Page = response.page;
                setTotalPages(response['total_pages']);
                setTotalResults(response['total_results']);
                setResults(response.results);
                setHasLoaded(true);
                setPaginationLoading(false);
            }).catch(() =>{
                setMessage("Could not search for movie!");
            });
        }else{
            FetchMovies(filter).then(response => {
                filter.Page = response.page;
                setTotalPages(response['total_pages']);
                setTotalResults(response['total_results']);
                setResults(response.results);
                setHasLoaded(true);
                setPaginationLoading(false);
            }).catch(() => {
                setMessage("Could not fetch top rated movies!");
            });
        }
    }

    return (
        <div>
            <FilterBox onSetFilters={onSetFilters} showFilterBox={showFilterBox}/>

            {hasLoaded ? (message ? <Message msg={message}/> :
                    <div className="display-result-box">

                        <Info totalPagesCount={totalPagesCount}
                              totalResultsCount={totalResultsCount}
                        />

                        <DisplayBox results={topRatedMovies} filter={filter}/>
                    </div>
            ) : <div className="display-result-box">
                <Loading/>
            </div>
            }

            {paginationLoading ? <div>
                    <hr/>
                    <Loading/>
                </div>:
                <PaginationBox totalPages={totalPagesCount}
                               onGoToPage={onGoToPage}
                               onNextPage={onNextPage}
                               onPreviousPage={onPreviousPage}
                               page={filter.Page}/>
            }
        </div>
    );
}

export default FilterContent;