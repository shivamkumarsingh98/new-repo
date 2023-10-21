import Form from "../../../new-super-app/src/Component/Home/Form";
import './Header.css'

const Header = () => {
    return(
        <div className="onepage">
            <div className="secfirst">
            <h1>Discover new things on Superapp</h1>
            </div>
            <div className="secSecond">
            <Form />
            </div>
        
        </div>
    )
}

export default Header;