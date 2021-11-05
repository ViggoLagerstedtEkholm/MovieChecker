import {useContext} from "react";
import {FilterContext} from "../Context/FilterContext";

function FilteringInfo() {
    const {filter} = useContext(FilterContext);

    return (
        <div className="search-terms-container">
            <h1>Search terms</h1>
            <ul>
                <li>
                    <p><b>Filter option:</b> {filter.Order}</p>
                </li>

                {filter.Search ?
                    <li>
                        <p><b>Search:</b> {filter.Search}</p>
                    </li>
                    : null
                }

                <li>
                    <p><b>Results per page:</b> 19</p>
                </li>

                <li>
                    <p><b>Minimum score:</b> {filter.MinRating}</p>
                </li>

                <li>
                    <p><b>Minimum count:</b> {filter.MinRatingCount}</p>
                </li>
            </ul>
        </div>
    );
}

export default FilteringInfo;