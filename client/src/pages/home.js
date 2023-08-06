import cleaningPerson from "../images/cleaning-person.png";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import videoLinkImg from "../images/video-image-link.jpg";

const Home = () => {
  return (
    <>
      <div className="homepage-top">
        <NavigationBar setBackground={false} />
        <div className="container headline d-flex flex-wrap">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h1 className="text-white">
                We are fully prepared to be at your service with just one call.
              </h1>
              <span className="text-secondary">
                Our expertise in cleaning is unparalled. We are ready to clean
                any time of the day and leave your space as clean, safe and
                hygienic as possible.
              </span>
              <div className="d-flex flex-wrap mt-2 homepage-top-boxes">
                <div className="p-2 me-3 mb-3">
                  <i className="bi bi-star-fill" /> 4.5 out of 5
                </div>
                <div className="p-2 me-3 mb-3">
                  <i className="bi bi-person-circle" /> 11k reviews
                </div>
                <div className="p-2 me-3 mb-3">
                  <i className="bi bi-trophy-fill" /> Trusted
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <img
                className="img-fluid"
                src={cleaningPerson}
                alt="person carrying cleaning equipment"
              />
            </div>
          </div>
        </div>
      </div>

      <main>
        <br />
        <div className="container homepage-us d-flex flex-wrap">
          <div className="row mt-4 mb-4 homepage-lns">
            <div className="col-md-5 col-sm-12">
              <h1>Let The Numbers Speak For Us</h1>
              <span className="text-secondary">
                Our clients reach from one end of Canada to the other. The
                customer satisfaction we provide is of the highest level and is
                evident from our revenue.
              </span>
              <br />
              <br />
              <button className="btn btn-md btn-primary">Learn More</button>
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div className="col-md-6 col-sm-12 text-center homepage-lns-rc">
              <div className="row">
                <div className="col border-end">
                  <span className="text-secondary">Our Revenue</span>
                  <br />
                  <span className="fw-bold display-3">$1M</span>
                </div>
                <div className="col">
                  <span className="text-secondary">Customers</span>
                  <br />
                  <span className="fw-bold display-3">+1K</span>
                </div>
              </div>
              <div className="row mt-4">
                <hr className="w-50 border border-primary border-5 opacity-100" />
                <hr className="text-secondary w-50" />
              </div>
            </div>
          </div>
          <br />
          <div className="row mt-4 mb-1 d-flex flex-wrap">
            <div className="col-md-3 col-sm-12">
              <h1>Know Us Better!</h1>
            </div>
            <div className="col-md-1 col-sm-0"></div>
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <div className="col-md-10 col-sm-12 mb-3">
                  <span className="text-secondary">
                    We started as the company with 4 founders just providing
                    home cleaning services. We grew with time and experience and
                    learned from our failures. Over time, we hired more
                    professionals and expanded our team to reach greater
                    heights.
                  </span>
                </div>
                <div className="col-md-2 col-sm-12">
                  <button className="btn btn-md btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1 mb-4 homepage-knb-p2">
            <div className="col-md-5 col-sm-12 border mb-1 homepage-video">
              <a
                className="text-decoration-none"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <img
                  className="img-fluid"
                  src={videoLinkImg}
                  alt="link to cleaning service video"
                />
              </a>
            </div>
            <div className="col-md-7 col-sm-12 ps-5">
              <div className="row">
                <span className="homepage-us-wwa p-4 mb-3">
                  <h3 className="fw-bold">Who We Are</h3>
                  We are QuickClean, an all-round cleaning servie provider. Our
                  goal is make spaces as clean and hygienic as possible. Our
                  staff is super-experienced and skilled. With our goal, we aim
                  to achieve maximum customer satisfaction.
                </span>
                <span className="homepage-us-wwd p-4 mb-3">
                  <h3 className="fw-bold">Who We Do</h3>
                  We offer all kinds of cleaning services from personal to
                  enterprise level. These include Residential Cleaning, Pest
                  Cleaning, Commercial Cleaning, Carpet Cleaning, Window
                  Cleaning, Move-in/Move-out Cleaning, and others.
                </span>
                <br />
                <div className="d-flex">
                  <a href="/" className="text-dark me-4">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="/" className="text-dark me-4">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="/" className="text-dark me-4">
                    <i className="bi bi-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row mt-4 mb-4">
            <div className="row text-center mb-5">
              <h1 className="fw-bold">Services</h1>
              <span className="text-secondary">
                Our skilled and reliable team of cleaning experts is dedicated
                to delivering exceptional results, leaving every corner of your
                home or office spotless and shining bright. <br />
                Our professional team is skilled, reliable, and dedicated to
                delivering exceptional results.
              </span>
            </div>
            <div className="row text-center d-flex justify-content-evenly">
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-bucket-fill" />
                <div className="card-body">
                  <h5 className="card-title">Window Cleaning</h5>
                  <span className="card-text">
                    Specialized service aimed at cleaning windows, removing
                    dirt, grime, and streaks, to enhance building appearance and
                    improve natural light infiltration. Provided by
                    professionals.
                  </span>
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-bug-fill" />
                <div className="card-body">
                  <h5 className="card-title">Pest Control</h5>
                  <span className="card-text">
                    Eliminating pests from homes and premises to maintain a
                    clean and safe living environment. Conducted by skilled pest
                    control professionals.
                  </span>
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-gear-fill" />
                <div className="card-body">
                  <h5 className="card-title">Move-in & Out</h5>
                  <span className="card-text">
                    Comprehensive cleaning service designed for transitioning in
                    or out of a property, leaving the space immaculate,
                    hygienic, and ready for occupancy.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
