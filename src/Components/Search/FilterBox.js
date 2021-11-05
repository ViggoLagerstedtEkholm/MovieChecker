import {useState} from "react";
import FilteringInfo from "./FilteringInfo";

function FilterBox({onSetFilters, showFilterBox}) {
    const [state, setState] = useState(showFilterBox);
    const [showFilteringInfo, setShowInfoFiltering] = useState(!showFilterBox);
    const [order, setOrder] = useState('popularity.desc');
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(0);
    const [count, setCount] = useState(1000);

    const selectOptions = new Map();
    selectOptions.set('Popularity Descending', 'popularity.desc');
    selectOptions.set('Popularity Ascending', 'popularity.asc');

    selectOptions.set('Release Date Descending', 'release_date.desc');
    selectOptions.set('Release Date Ascending', 'release_date.asc');

    selectOptions.set('Revenue Descending', 'release_date.desc');
    selectOptions.set('Revenue Ascending', 'release_date.asc');

    selectOptions.set('Primary Release Date Descending', 'primary_release_date.desc');
    selectOptions.set('Primary Release Date Ascending', 'primary_release_date.asc');

    selectOptions.set('Original Title Descending', 'original_title.desc');
    selectOptions.set('Original Title Ascending', 'original_title.asc');

    selectOptions.set('Vote Average Descending', 'vote_average.desc');
    selectOptions.set('Vote Average Ascending', 'vote_average.asc');

    selectOptions.set('Vote Count Descending', 'vote_count.desc');
    selectOptions.set('Vote Count Ascending', 'vote_count.asc');

    const toggle = () => {
        if (state) {
            setState(false);
            setShowInfoFiltering(true);
        } else {
            setState(true);
            setShowInfoFiltering(false);
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        const filter = {
            Page: 1,
            Search: search,
            Order: order,
            MinRating : rating,
            MinRatingCount : count};

        onSetFilters(filter);
        toggle();
    }

    function renderOrderOptions(){
        return Array.from(selectOptions).map(([key, value], i) => {
            return (
                <option key={i} value={value}>{key}</option>
            )
        });
    }

    return (
        <div>
            <button className="button-style-4" onClick={toggle}> Toggle filtering.</button>
            {state ? <form onSubmit={onSubmit}>
                <div className="content-filter-box filter-background-box">
                    <div className="row">
                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Select order option
                            </div>
                            <select className="content-filter-select" name="Option" id="Option"
                                    value={order} onChange={(e) => {
                                setOrder(e.target.value);
                                console.log("ORDER: " + e.target.value);
                            }}>
                                {renderOrderOptions()}
                            </select>
                        </div>

                        <div className="column filter-input-background">
                            <h2>2 filtering criteria</h2>
                            <p>Minimum score</p>
                            <input className="user-input-text" id="search" name="Score" type="number"
                                   placeholder="Score"
                                   value={rating}
                                   onChange={(e) => {
                                       setRating(e.target.value);
                                   }}
                            />

                            <p>Minimum amount of votes</p>
                            <input className="user-input-text" id="count" name="Count" type="number"
                                   placeholder="Count"
                                   value={count}
                                   onChange={(e) => {
                                       setCount(e.target.value);
                                   }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="column filter-input-background">
                            <div className="filter-text">
                                Search Title
                            </div>
                            <input className="user-input-text" id="search" type="text" name="Search"
                                   placeholder="Search"
                                   value={search}
                                   onChange={(e) => {
                                       setSearch(e.target.value);
                                   }}
                            />
                        </div>
                    </div>

                    <button className="button-style-1" type="submit" name="filter_button" value="GO">Filter</button>
                </div>
            </form> : null}

            {
                showFilteringInfo ? <FilteringInfo/> : null
            }

        </div>
    );
}

export default FilterBox;