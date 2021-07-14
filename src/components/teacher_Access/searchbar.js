import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faSearch} from '@fortawesome/free-solid-svg-icons';


function searchbar() {
    return (
        <div className='search'>
           <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" className="search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light  " placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" className="search_input"/>
                            <div class="input-group-append">
                                <button class="butn" type="button">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                            </div>
                        </div>
                    </form> 
        </div>
    )
}

export default searchbar
