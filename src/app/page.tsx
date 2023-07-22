import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
<>
        <div className="container my-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" className="btn btn-primary">Read Now</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" className="btn btn-primary">Read Now</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <button type="button" className="btn btn-primary">Read Now</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">

              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button type="button" className="btn btn-primary">Read Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">

        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          
          collapse
        
        </button>

        <div className="collapse" id="collapseExample">
          
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>

        </div>

      </div>
    </>

  )
}
