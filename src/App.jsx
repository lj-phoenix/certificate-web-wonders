import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'

import './helper/util'

// import bgImage from './media/certificate_bg.svg'
// import bgImage from "./media/certificate_1.svg";
import bgImage from "./media/certificate_4.svg";
// import bgBage from './media/a.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="certificate__container"
      id="certificate-web-wonder"
    >
      <div className="certificate__wrap">
        <img className="certificate__bg" src={bgImage} />
        <div className="certificate__content">
          <div className="certficate__content__badge">
            {/* <div className="badge">
              <img className="badge__2020-awards" src={bgBage} />
            </div> */}
          </div>
          <div className="certificate__content__text">
            <div className="certificate__apperication">
              <div className="certificate__apperication__title">
                Certificate <br />
                <span className='certificate__apperication__title__light'> of Apperication </span>
              </div>
            </div>
            <div className="certificate__info">
              <div className="info-text">
                PROUDLY PRESENTED TO
              </div>
              <div className="info-person">
                Devanshu Shah
              </div>
              <div className="info-text">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="info-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, praesentium esse laudantium id quisquam expedita accusamus vitae veritatis aspernatur doloribus dolorem unde maiores assumenda excepturi sed at suscipit beatae inventore!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
