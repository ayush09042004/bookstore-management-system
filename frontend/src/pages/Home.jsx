import React, { useEffect } from 'react';
import "./Home.css";
import aboutImage from "../images/about.jpg";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

    // ✔ Animation On Scroll (AOS)
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // ✔ Parallax scroll effect
    useEffect(() => {
        const onScroll = () => {
            const offset = window.scrollY * 0.1;
            const img = document.querySelector(".home-img");
            if (img) img.style.transform = `translateY(${offset}px)`;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">

            {/* MAIN HERO SECTION */}
            <div className="row container hero-row">

                {/* LEFT TEXT SECTION */}
                <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column hero-text" data-aos="fade-right">
                    <h2 className="title-main">BOOK STORE</h2>
                    <h3 className="title-sub">FOR YOU</h3>
                    <p className="tagline">Checkout The Books From Here</p>

                    <Link to="/books" className="viewBook my-3">
                        View Books →
                    </Link>
                </div>

                {/* RIGHT IMAGE SECTION */}
                <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column hero-img-container" data-aos="fade-left">
                    <img className="img-fluid home-img" src={aboutImage} alt="Books Banner" />
                </div>
            </div>

            {/* CATEGORY SECTION */}
            <div className="categories container" data-aos="fade-up">
                <h2 className="section-title">Browse Categories</h2>
                <div className="category-list">
                    <span className="category-item">Fiction</span>
                    <span className="category-item">Adventure</span>
                    <span className="category-item">Romance</span>
                    <span className="category-item">Science</span>
                    <span className="category-item">Kids</span>
                </div>
            </div>

            {/* FEATURED SECTION */}
            <div className="featured container text-center" data-aos="fade-up">
                <h2 className="section-title">Featured Books</h2>
                <p className="featured-sub">🔥 Hand-picked books curated just for you</p>

                <Link to="/books" className="btn btn-outline-light mt-2">
                    Explore Now
                </Link>
            </div>

        </div>
    );
};

export default Home;
