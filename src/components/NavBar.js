import React from 'react';

const NavBar = ({ onPrevious, onNext }) => {
  return (
    <div>
      {onPrevious && <button onClick={onPrevious}>Précédent</button>}
      {onNext && <button onClick={onNext}>Suivant</button>}
    </div>
  );
};

export default NavBar;