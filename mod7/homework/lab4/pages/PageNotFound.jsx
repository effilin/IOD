import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div className="PageNotFound">
            <h1>Page Not found</h1>
            <Link to="/">home</Link>
        </div>
    )
}

export default PageNotFound