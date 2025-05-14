import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import { BlogList } from "../database/Bloglist";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Blogs = () => {
    useGSAP(() => {
        gsap.from(".blog-card", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2
        });

        gsap.from("h2", {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: "power3.out"
        });
    }, []);

    return (
        <>
            <Header />
            <hr />
            <main className="container my-4">
                <h2 className="text-center mb-4">Blogs</h2>
                <div className="row">
                    {
                        BlogList.map((blog, index) => (
                            <div className="col-md-4 col-sm-6 mb-4 blog-card" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className="card-text flex-grow-1">{blog.description}</p>
                                        <Link to={blog.path} className="link-button-secondary mt-auto">
                                            Let's Check it Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blogs;
