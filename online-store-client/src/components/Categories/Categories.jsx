import React from 'react'

import './Categories.scss'
import { Link } from 'react-router-dom'

// this page needs to be updated manually.
// all images have a 1600 width!

const Categories = () => {
    return (
        <div className="categories">
          <div className="col">
            <div className="row">
              <img
                src="/img/Floating_Object_B_8.png"
                alt=""
              />
              <button>
                <Link className="link" to="/">
                  Sale
                </Link>
              </button>
            </div>
            <div className="row">
              <img
                src="/img/Portable_Wireless_Charger_1.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Office
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/img/Vintage_Foldable_Hanging_Lamp_7.jpg"
                alt=""
              />
              <button>
                <Link to="/products/2" className="link">
                  Living
                </Link>
              </button>
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <div className="col">
                <div className="row">
                  <img
                    src="/img/Portable_Fruit_Mixer_2.jpg"
                    alt=""
                  />
                  <button>
                    <Link to="/products/3" className="link">
                      Kitchen
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  {" "}
                  <img
                    src="/img/Ultrasonic_Cleaner_3.jpg"
                    alt=""
                  />
                  <button>
                    <Link to="/" className="link">
                      Bathroom
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="/img/Reusable_Straw_Silicone_2.jpg"
                alt=""
              />
              <button>
                <Link to="/" className="link">
                  Utilities
                </Link>
              </button>
            </div>
          </div>
        </div>
      );
}

export default Categories