import React from 'react';
import './Section.css';

const Section = ({ content }) => {
  const {
    imagePosition,
    mainImage,
    actionImage,
    icon,
    title,
    description,
    action,
  } = content;

  function getImageSection() {
    return (
      <div className="section__part section__part__image">
        {/* {actionImage ? <button>{action}</button> : {}} */}
        <img className="section__image" src={mainImage} alt={`${title}`} />
      </div>
    );
  }

  function getContentSection() {
    return (
      <div className="section__part" id={title.split(' ')[1]}>
        <img
          className="section__icon"
          src={icon}
          alt={`${title} icon`}
          width="128px"
          height="128"
        />
        <h4 className="section__title">{title}</h4>
        <p className="section__description">{description}</p>
        <a className="section__action" href="/#">
          {action}
        </a>
      </div>
    );
  }

  if (imagePosition === 'left') {
    return (
      <section className="section">
        {getImageSection()}
        {getContentSection()}
      </section>
    );
  }

  return (
    <section className="section">
      {getContentSection()}
      {getImageSection()}
    </section>
  );
};

export default Section;
