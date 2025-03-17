import React from 'react';

const ButtonFavoris = ({ isFavorited, onClick }) => {
  return (
    <button onClick={onClick}>
      {isFavorited ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    </button>
  );
};

export default ButtonFavoris;