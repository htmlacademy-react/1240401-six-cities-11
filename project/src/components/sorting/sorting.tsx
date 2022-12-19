import { useState } from 'react';
import { sortingTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeSortName } from '../../store/action';

type SortingProps = {
  currentSortingType: string;
}

function Sorting({currentSortingType}: SortingProps): JSX.Element {
const dispatch = useAppDispatch();
const [isSortActive, setSortActive] = useState<boolean>(false);

const handleSortChange = (sortName: string) => {
  dispatch(changeSortName(sortName));
}
  return (
    <form
    className="places__sorting"
    action="#"
    method="get"
    onClick={() => setSortActive(!isSortActive)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.keys(sortingTypes).map((key) => (
           (
            < li
              key={key}
              className="places__option places__option--active"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault;
                handleSortChange;
              }}
            >
              // @ts-ignore
              {sortingTypes[key])
            </li>
          )
        ))}
      </ul>
    </form >
  );
}
export default Sorting;
