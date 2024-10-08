import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from '../../redux/campers/slice';
import { selectFavoritesId } from '../../redux/campers/selectors';
import { clsx } from 'clsx';
import css from './FavoriteButton.module.css';
import { Icon } from 'shared';

const FavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const favoritesId = useSelector(selectFavoritesId);

  const [isChecked, setIsChecked] = useState(() =>
    favoritesId.some((item) => item === id),
  );

  const handleChange = ({ target: { checked } }) => {
    setIsChecked(checked);
    if (checked) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(deleteFromFavorite(id));
    }
  };

  return (
    <>
      <input
        className={css.heartCheckbox}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
      />
      <Icon
        iconId='icon-heart'
        className={clsx(css.heartIcon, { [css.active]: isChecked })}
      />
    </>
  );
};

export default FavoriteButton;