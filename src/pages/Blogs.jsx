import { Link } from "react-router-dom";
import Header from "../components/header";
import { BlogList } from "../database/Bloglist";
import Footer from "../components/Footer";

const Blogs = () => {
    return (
        <>
            <Header />
            <hr />
            <main className="container my-4">
                <h2 className="text-center mb-4">Blogs</h2>
                <div className="row">
                    {
                        BlogList.map((blog, index) => (
                            <div className="col-md-4 col-sm-6 mb-4" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{blog.title}</h5>
                                        <p className="card-text flex-grow-1">{blog.description}</p>
                                        <Link to={blog.path}  className=" link-button-secondary mt-auto">
                                            Let's Check it Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            
        </>
    );
};

export default Blogs;
