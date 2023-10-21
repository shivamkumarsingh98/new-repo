import React from 'react'
import Form from '../Component/Home/Form.jsx'
import Banner from '../Component/Home/Banner.jsx'
import styles from '../Pages/Home.module.css'

const Home = () => {
    return (
        <div className={styles.page}>
            <Banner />
            <Form />
        </div>
    )
}

export default Home
