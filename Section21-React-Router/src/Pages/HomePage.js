import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const redirectPage = () => {
      navigate('product')
    }
    return(
        <>Home Page
        <button onClick={redirectPage}>Navigate</button>
        </>
    )
}

export default HomePage;