import './FancyBorder.css'

const FancyBorder = () => {
  return (
 
            <div className="fancyborder-image">
                        <div className="container">
                            <div className="background-img">
                            <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    <h1>The future of aviation</h1>
                                    <em className={`neonText ${window.innerWidth > 900 ? ' animated' : ''}`}>Join Us Today</em>
                                </div>
                            </div>
                            </div>
                        </div>

            </div>

  )
}

export default FancyBorder