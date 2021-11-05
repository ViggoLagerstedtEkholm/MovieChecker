import FilterContent from "../Search/FilterContent";
import {MovieBox} from "../Display/MovieBox";
import {FilterContext} from "../Context/FilterContext";
import {useMemo, useState} from "react";

function Showcase() {
    const [filter, setFilter] = useState({
        Page: 1,
        Order: 'popularity.desc',
        Search : undefined,
        MinRating : 0,
        MinRatingCount : 1000
    });

    const value = useMemo(() => ({ filter, setFilter }), [filter, setFilter]);

    return (
        <div className="container">
            <div className="title-box">
                <h1>Welcome to MovieChecker</h1>
            </div>
            <FilterContext.Provider value={value}>
                <FilterContent
                    displayBox={MovieBox}
                    showFilterBox={true}
                />
            </FilterContext.Provider>
        </div>
    );
}

export default Showcase;
