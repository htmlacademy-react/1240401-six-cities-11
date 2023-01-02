import { useState } from 'react';
import { SortingTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeSortName } from '../../store/action';
import cn from 'classnames';
import { SortingKeys } from '../../types/offers';

type SortingProps = {
  currentSortName: SortingKeys;
}

function Sorting({ currentSortName }: SortingProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [isSortOpen, setSortOpen] = useState<boolean>(false);

  const handleSortChange = (sortName: SortingKeys) => {
    dispatch(changeSortName(sortName));
    setSortOpen(false);
  };

  const sortingKeys = Object.keys(SortingTypes) as SortingKeys[];

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by{' '}</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortOpen(!isSortOpen)}>
        {SortingTypes[currentSortName]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', isSortOpen && 'places__options--opened')}>
        {sortingKeys.map((sorting) => {
          const className = cn('places__option', {
            'places__option--active': currentSortName === sorting
          });
          return (
            <li
              key={sorting}
              className={className}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                handleSortChange(sorting);
              }}
            >
              {SortingTypes[sorting]}
            </li>
          );
        })}
      </ul>
    </form >
  );
}
export default Sorting;
