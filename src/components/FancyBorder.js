import Rocket from '../images/rocket.svg'
import './FancyBorder.css'

const FancyBorder = () => {
  return (
 
            <div class="fancyborder-image">
                        <div class="container">
                            <div class="background-img">
                            <div class="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div class="content">
                                    <h1>The future of aviation</h1>
                                    <em class={`neonText ${window.innerWidth > 900 ? ' animated' : ''}`}>Join Us Today</em>
                                </div>
                            </div>
                            </div>
                        </div>

            </div>

  )
}

export default FancyBorder