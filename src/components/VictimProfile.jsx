import React from 'react';

const VictimProfile = ({
  fullName,
  ageWhenKilled,
  placeOfBirth,
  imageFile,
  placeOfDeath,
  linkedin,
  facebook,
  instagram,
  writerConnection,
  relatedLinks
}) => {
  return (
    <div className="victim-profile">
      <h1>{fullName}</h1>
      <img src={imageFile} alt={`${fullName}`} />
      <p><strong>Age when killed:</strong> {ageWhenKilled}</p>
      <p><strong>Place of birth:</strong> {placeOfBirth}</p>
      <p><strong>Place of death:</strong> {placeOfDeath}</p>
      <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
      <p><strong>Facebook:</strong> <a href={facebook} target="_blank" rel="noopener noreferrer">{facebook}</a></p>
      <p><strong>Instagram:</strong> <a href={instagram} target="_blank" rel="noopener noreferrer">{instagram}</a></p>
      <p><strong>Writer's connection to victim:</strong> {writerConnection}</p>
      <div>
        <strong>Related Links:</strong>
        <ul>
          {relatedLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VictimProfile;
