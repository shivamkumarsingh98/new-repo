import './Category.css'
import Action from '../../assets/Action.jpg'
import Drama from '../../assets/Drama.jpg'
import Fantasy from '../../assets/Fantasy.jpg'
import Fiction from '../../assets/Fiction.jpg'
import Horror from '../../assets/Horror.jpg'
import Music from '../../assets/Music.jpg'
import Romanse from '../../assets/Romanse.jpg'
import Thriller from '../../assets/Thriller.jpg'
import Western from '../../assets/Western.jpg'
import Chip from "@material-ui/core/Chip";
import styles from './Category.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const genres = [
    {
        id:"Action",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Action} />
    },
    {
        id:"Drama",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Drama} />
    },
    {
        id:"Fantasy",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Fantasy} />
    },
    {
        id:"Fiction",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Fiction} />
    },
    {
        id:"Horror",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Horror} />
    },
    {
        id:"Music",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Music} />
    },
    {
        id:"Romanse",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Romanse} />
    },
    {
        id:"Thriller",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Thriller} />
    },
    {
        id:" Western",
        color:"#FF5289",
        image: <img style={{ width: "160PX" , height: "120px"}} src={Western} />
    }
]

const Category = () => {
    const [Category, setCategory] = useState([]);
    const[lengthError, setLengthError] = useState(false);
    const navigate = useNavigate();
    if(Category.length < 3) {
        setLengthError(true)
        return;
    }else {
        setLengthError(false)
        window.localStorage.setItem("genres", JSON.stringify([...Category])
        );
        navigate("/")
    }
    return(
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.heading}>Super app</p>
                <p className={styles.subHeading}>
                    Chose your entertainment category
                </p>
                <div style={{ marginTop: "10vh"}}>
                    <Chip
                    Category={Category}
                    color={"green"}
                    setCategory={setCategory}
                    />
                    {lengthError ? (
                        <p className={styles.error}>Please choose at least 3</p>
                    ): (
                        <></>
                    )}
                </div>
            </div>
            <div className={styles.right}>
                {genres.map((data, idx) => (
                    <Block
                    data={data}
                    idx={idx}
                    Category={Category}
                    setCategory={setCategory}
                    />
                ))}
            </div>
            <button className={styles.signUp} onClick={handleSignUp}>
                Next Page
            </button>
       
        </div>
    )
};
const Block = ({ data, idx, setCategory, Category}) => {
    const [selected, setSelected] = useState()
    const handleClick = (e) => {
        if(Category.inclides(data.id)) {
            const index = Category.indexof(data.id);
            Category.splice(index,1);
            setCategory([...Category]);
        }else {
            setCategory([...Category, data.id]);
        }
        setSelected(!selected);
    };
    useEffect(()=>{
        setSelected(Category.inclides(data.id) == true);
    })
    return(
        <>
        S</>
    )
}
export default Category