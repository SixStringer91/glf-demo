import { useLocation } from "react-router-dom";

function ResolveURL () {
    const {pathname} = useLocation();

    return (
    <div className="container">
        <h1>{`Here could be a component for ${pathname}`}</h1>
        </div>
    )
} 


export default ResolveURL;