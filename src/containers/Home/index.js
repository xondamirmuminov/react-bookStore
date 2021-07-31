import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/all';
import axios from '../../utils/axios';

function Home() {
    const [bookTitle, setBookTitle] = useState('');
    const [searchBook, setSearchBook] = useState([]);
    const handleInputValue = (e) => {
        setBookTitle(e.target.value)
    }
    const handleSearch = async () => {
        const response = await axios.post(`/books/search?title=${bookTitle}`)
        response.json();
        try {
            console.log(response)
        } catch {
            console.log('error')
        }
    }
    return (
        <section className="home">
            <div className="container">
                <div className="home__inner">
                    <div className="home__inner-search">
                        <div className="home__search">
                            <h1 className="home__search-title">Qidirish</h1>
                            <div className="home__search-inner-inp">
                                <input onChange={handleInputValue} type="text" value={bookTitle} name="search" />
                                <button className="home__search-btn" onClick={handleSearch}><BiSearchAlt />Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;