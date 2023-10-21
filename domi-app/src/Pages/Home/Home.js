import { Navbar } from "../../componant/Navbar/Navbar"
import { Fragment, useEffect, useState } from "react"
import { Productcard } from "../../componant/Productcard/Productcard"
import './Home.css'
import axios from 'axios'

export const Home = () => {

    const [Products, setProduct] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data: { books } } = await axios.get("data.json");
                setProduct(books)
            } catch (error) {
                console.log(error)
            }
        })()

    }, [])
    return (
        <>
            <Fragment>
                <Navbar />
                <main className=" main d-flex gap wrap">
                    {
                        Products.map(product => <Productcard product={product} />)
                    }
                </main>
            </Fragment>


        </>
    )
}

