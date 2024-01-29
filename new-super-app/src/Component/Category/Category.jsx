import Action from '../../assets/Action.jpg'
import Drama from '../../assets/Drama.jpg'
import Fantasy from '../../assets/Fantasy.jpg'
import Fiction from '../../assets/Fiction.jpg'
import Horror from '../../assets/Horror.jpg'
import Music from '../../assets/Music.jpg'
import Romanse from '../../assets/Romanse.jpg'
import Thriller from '../../assets/Thriller.jpg'
import Western from '../../assets/Western.jpg'
import Chips from '../Golobal/Chips'
import styles from './Category.module.css'
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
    const [categories, setCategories] = useState([]);
    const [lengthError, setLengthError] = useState(false);
    const navigate = useNavigate();
    const handleSignUp = () => {
      if (categories.length < 3) {
        setLengthError(true);
        return;
      } else {
        setLengthError(false);
        window.localStorage.setItem("genres", JSON.stringify([...categories]));
        navigate("/Browser");
      }
    };
    
    
    return(
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.heading}>Super app</p>
                <p className={styles.subHeading}>
                    Chose your entertainment category
                </p>
                <div style={{ marginTop: "10vh"}}>
                    <Chips
                    categories={categories}
                    color={"green"}
                    setCategories={setCategories}
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
                    categories={categories}
                    setCategories={setCategories}
                    />
                ))}
            </div>
            <button className={styles.signUp} onClick={handleSignUp} >
                Next Page
            </button>
       
        </div>
    )
};
const Block = ({ data, idx,setCategories,categories}) => {
    const [selected, setSelected] = useState()
    const handleClick = (e) => {
        if(categories.includes(data.id)) {
            const index = categories.indexof(data.id);
            categories.splice(index,1);
            setCategories([...categories]);
        }else {
            setCategories([...categories, data.id]);
        }
        setSelected(!selected);
    };
    useEffect(()=>{
        setSelected(categories.includes(data.id) == true);
    })
    return(   
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        background: data["color"],
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border: `${selected ? "4px solid green" : "4px solid white"}`,
      }}
    >
      <p style={{ marginBottom: "4px", fontSize: "18px" }}>{data.id}</p>
      {data.image}
    </div>
    )
}

export default Category