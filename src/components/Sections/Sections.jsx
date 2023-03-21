import React from 'react';
import { sectionsData } from '../../data/sectionsData';
import Section from '../Section/Section';

const Sections = () => {
  return (
    <div>
      {sectionsData.map((data, index) => (
        <Section content={data} key={index} />
      ))}
    </div>
  );
};

export default Sections;
