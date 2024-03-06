import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return  (
        <header className='header'>
            <section className='banner'>
                {/*Texts that are going to be in the banners*/}
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Family Owned Restourant</p>
                    <Link to="/booking"><button aria-label='On-Click'>Reserve a Table</button></Link>
                </div>

                {/*Image of Lemons on Banner*/}
                <div className='banner-img'>
                <img src={bannerImg} alt=''/>
                </div>
            </section>

        </header>
    );
};

export default Header;