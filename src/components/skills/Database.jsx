import React from 'react'
import './skills.css'
const Database = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Database</h3>

      <div className="skills__box">
      <div className="skills__group">
          
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

       {/* <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">API Testing</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Swagger </h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default Database