import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadRentCards, sortDown, sortUp } from '../itemSlice';
import { selectItems } from '../selectItems';
import './ItemList.css';
import { selectLikes } from '../../favorites/selectLikes';

function RentItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);
    const likes = useSelector(selectLikes);

    function sortItemRentUp(): void {
      dispatch(sortUp());
    }

    function sortItemRentDown(): void {
      dispatch(sortDown());
    }

    useEffect(() => {
        dispatch(loadRentCards());
      }, [dispatch]);

    // const rentItems = useMemo(() => items.filter((el) => el.type === 'Аренда'), [items]);
  return (
    <div>
      <span>Сортировать по цене: </span>
      <IconButton size="medium" color="inherit" onClick={sortItemRentUp}>
          <KeyboardDoubleArrowDownIcon />
      </IconButton>
      <IconButton size="medium" color="inherit" onClick={sortItemRentDown}>
          <KeyboardDoubleArrowUpIcon />
      </IconButton>
    <div className="container">
    {items.map((item) => (
<Item
  item={item}
  key={item.id}
  liked={(likes.filter((likeItem) => likeItem.id === item.id)).length > 0}
/>
))}
    </div>
    </div>
  );
}

export default RentItemList;
