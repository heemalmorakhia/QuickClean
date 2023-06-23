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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                at volutpat odio. Morbi tincidunt diam nec auctor mollis. Ut in
                placerat lectus.
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
        <div className="container homepage-booking mb-5">
          <div className="d-flex mb-2">
            <button
              type="button"
              className="btn btn-md p-2 btn-light text-primary me-2"
            >
              <i className="bi bi-clock-fill" /> Book a service
            </button>
            <button
              type="button"
              className="btn btn-md p-2 btn-light text-secondary"
            >
              <i className="bi bi-question-circle-fill" /> Ask a question
            </button>
          </div>
          <form className="homepage-booking-form p-4">
            <div className="row mb-2">
              <div className="col-md-4 col-sm-12">
                <label htmlFor="locationSelect">Location</label>
                <br />
                <select
                  class="form-select"
                  id="locationSelect"
                  name="locationSelect"
                >
                  <option value="Halifax" selected>
                    Halifax
                  </option>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Calgary">Calgary</option>
                </select>
              </div>
              <div className="col-md-3 col-sm-12">
                <label htmlFor="serviceSelect">Service</label>
                <br />
                <select
                  class="form-select"
                  id="serviceSelect"
                  name="serviceSelect"
                >
                  <option value="Cleaning" selected>
                    Cleaning
                  </option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Dummy">Dummy</option>
                </select>
              </div>
              <div className="col-md-2 col-sm-12">
                <label htmlFor="dateBooking">Date</label>
                <br />
                <input
                  type="date"
                  class="form-control"
                  id="dateBooking"
                  name="dateBooking"
                />
              </div>
              <div className="col-md-2 col-sm-12">
                <label htmlFor="timeBooking">Time</label>
                <br />
                <input
                  type="time"
                  class="form-control"
                  id="timeBooking"
                  name="timeBooking"
                />
              </div>
              <div className="col-md-1 col-sm-12">
                <br />
                <button className="btn btn-md btn-primary">Book</button>
              </div>
            </div>
          </form>
        </div>
        <div className="container homepage-us d-flex flex-wrap">
          <div className="row mt-4 mb-4 homepage-lns">
            <div className="col-md-5 col-sm-12">
              <h1>Let The Numbers Speak For Us</h1>
              <span className="text-secondary">
                Quisque id sem lacinia, aliquam arcu at, elementum sapien. Etiam
                porta molestie ante ac iaculis. Donec tempus odio vitae enim
                dignissim, vel convallis diam semper.
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
                    Maecenas blandit, elit et consectetur tincidunt, eros magna
                    posuere nulla, quis aliquam est justo eget ante. Donec quis
                    eros sit amet nibh tincidunt condimentum quis iaculis lacus.
                    Vestibulum massa metus, hendrerit quis lectus sit amet,
                    molestie porta velit. Etiam venenatis dui at erat volutpat
                    lobortis.
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
                  Nunc ultrices, leo sed convallis feugiat, ante augue finibus
                  mi, egestas auctor arcu tortor at erat. Integer nec egestas
                  est, nec sollicitudin odio. Donec eros eros, blandit sit amet
                  elit at, finibus vulputate urna. Donec eu justo mauris. Morbi
                  tincidunt leo ac pellentesque sodales. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </span>
                <span className="homepage-us-wwd p-4 mb-3">
                  <h3 className="fw-bold">Who We Do</h3>
                  Nunc ultrices, leo sed convallis feugiat, ante augue finibus
                  mi, egestas auctor arcu tortor at erat. Integer nec egestas
                  est, nec sollicitudin odio. Donec eros eros, blandit sit amet
                  elit at, finibus vulputate urna. Donec eu justo mauris. Morbi
                  tincidunt leo ac pellentesque sodales. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
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
                Aliquam ultrices consequat nisi, a rutrum dui bibendum sed.
                Curabitur aliquam eu sapien non pharetra. <br />
                Suspendisse eu libero vehicula, sagittis magna a, posuere felis.
              </span>
            </div>
            <div className="row text-center d-flex justify-content-evenly">
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-bucket-fill" />
                <div className="card-body">
                  <h5 className="card-title">Cleaning</h5>
                  <span className="card-text">
                    In est risus, mollis ac consectetur vitae, elementum sit
                    amet justo. Maecenas neque ex, venenatis ac ligula id,
                    pharetra imperdiet mauris. Ut lacus nibh, efficitur ut
                    scelerisque sit amet, consectetur varius velit. Sed urna
                    dui, elementum quis elementum aliquet, pellentesque ut
                    dolor. Aenean eget pulvinar lacus.
                  </span>
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-bug-fill" />
                <div className="card-body">
                  <h5 className="card-title">Pest Control</h5>
                  <span className="card-text">
                    Sed feugiat orci nec tincidunt rhoncus. In hac habitasse
                    platea dictumst. Nulla facilisi. Phasellus posuere eros
                    vitae consequat eleifend. Curabitur suscipit dolor ipsum,
                    non sollicitudin ipsum volutpat eu. Morbi eget quam
                    sollicitudin, iaculis justo at, cursus ipsum.
                  </span>
                </div>
              </div>
              <div className="card col-md-3 col-sm-12 mb-3">
                <br />
                <i className="bi bi-gear-fill" />
                <div className="card-body">
                  <h5 className="card-title">Dummy</h5>
                  <span className="card-text">
                    Donec convallis aliquam urna, ut accumsan magna euismod nec.
                    Sed imperdiet sagittis eleifend. Vestibulum pulvinar, ipsum
                    sed feugiat volutpat, turpis ligula egestas nisl, quis
                    bibendum quam leo eu quam. Suspendisse et nisl sit amet nisl
                    facilisis hendrerit.
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
