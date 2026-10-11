import Footer from './component/common/Footer'
import Header from './component/common/Header'

function App() {

  return (
    <>
      <div className="main-div">

        <Header />

        {/* Hero Section */}
        <section className="text-center text-white bg-primary py-5">
          <h1 className="display-5 fw-bold">
            Find Your Perfect Internship
          </h1>

          <p className="lead">
            Explore opportunities, gain experience and build your career.
          </p>
        </section>

        {/* Why Internship Hub */}
        <section className="container py-5">

          <h2 className="text-center mb-4">
            Why Internship Hub?
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4>🎓 For Students</h4>
                <p>
                  Find internships and gain practical experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4>💼 Career Growth</h4>
                <p>
                  Improve your skills and grow your career.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h4>🚀 Build Skills</h4>
                <p>
                  Learn new skills and prepare for your future.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="bg-light py-2">
          <div className="container text-center">

            <h2>Start Your Career Journey</h2>

            <p className="mt-3">
              Internship Hub helps students connect with
              internship opportunities and develop valuable
              skills for their future career.
            </p>

            <div className="row mt-2">

              <div className="col-md-4">
                <h3>100+</h3>
                <p>Opportunities</p>
              </div>

              <div className="col-md-4">
                <h3>50+</h3>
                <p>Companies</p>
              </div>

              <div className="col-md-4">
                <h3>500+</h3>
                <p>Students</p>
              </div>

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default App