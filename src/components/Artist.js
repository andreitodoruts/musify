import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Artist = (props) => {
    console.log(props,'sss');
    return (
        <li class="m-sidebar__item" key={props.id}>
            <Link to={`/artist/${props.id}`}>
                {props.name}
                <span class="m-sidebar__list--artist-listeners">{props.listeners}</span>
            </Link>
        </li>
    )

}

Artist.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    listeners: PropTypes.number.isRequired

}

export default Artist;