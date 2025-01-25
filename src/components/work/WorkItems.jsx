import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <div className="project-link-box">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="work__button">
          Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItems
