import React from 'react'
import { Link } from 'react-router-dom'
import './News.scss'

const News = () => {
  return (
    <>
    <section className='news'>
    <div className="container">
        <div className="news-content">
            <h2 className='news-title'>Stay in the know</h2>
            <p className='news-text'>Sign up to get marketing emails from Bookme.com,including promotions, rewards, travel experiences,and information about Bookme.com and Booking.com Transport Limited's products and services.</p>
        </div>
        <div className="email-sbs-group">
        <div className='news-input-email'>
            <input  className='news-input' type='email' placeholder='Your email address' />
        </div>
        <div className='subscribe'>
            <button className='subscribe-btn'>Subscribe</button>
        </div>
        </div>
        <div className="about-privacy">
            <p>You can opt out anytime. See our</p>
            <Link to='/privacy'>privacy statement.</Link>
        </div>
    </div>
    </section>
    </>
  )
}

export default News