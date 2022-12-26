import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, mediumCoverImage, title, summary, genres}) {
    return <div>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
           {/*<a href="/movie">{title}</a>*/}
        </h2>
        <img src={mediumCoverImage} alt="title"/>
        <p>{summary}</p>
        <ul>
            {genres?.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>
};

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;