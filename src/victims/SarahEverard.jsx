import React from 'react';
import VictimProfile from '../components/VictimProfile';
import imageFile from '../assets/victim-images/sarah_everard_1.jpg';

const sarahEverardData = {
  fullName: 'Sarah Everard',
  ageWhenKilled: 33,
  placeOfBirth: 'Surrey, England',
  imageFile: imageFile,
  placeOfDeath: 'Dover, Kent, England',
  linkedin: 'https://www.linkedin.com/in/saraheverard',
  facebook: 'https://www.facebook.com/saraheverard',
  instagram: 'https://www.instagram.com/severardphotos/',
  writerConnection: 'Everard Family',
  relatedLinks: [
    'https://www.bbc.com/news/uk-56384600',
    'https://www.theguardian.com/uk-news/2021/mar/14/sarah-everard-vigil-police-officer-remanded-in-custody', 
  ]
};

const SarahEverard = () => <VictimProfile {...sarahEverardData} />;

export default SarahEverard;
