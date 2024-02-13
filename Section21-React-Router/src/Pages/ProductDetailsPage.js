import { useParams, Link } from "react-router-dom";

const ProductDetilsPage = () => {
    const params = useParams();
    return (
        <>Product Details Page {JSON.stringify(params)}
        <Link to=".." relative='path'>Back</Link>
        </>
    )
}

export default ProductDetilsPage;