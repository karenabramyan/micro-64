import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadBuyCards, sortDown, sortUp } from '../itemSlice';
import { selectItems } from '../selectItems';
import './ItemList.css';

function BuyItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);

    useEffect(() => {
        dispatch(loadBuyCards());
      }, [dispatch]);

      function sortItemBuyUp(): void {
        dispatch(sortUp());
      }

      function sortItemBuyDown(): void {
        dispatch(sortDown());
      }

    const rentItems = useMemo(() => items.filter((el) => el.type !== 'Аренда'), [items]);
  return (
    <div>
    <span>Сортировать по цене: </span>
      <IconButton size="medium" color="inherit" onClick={sortItemBuyUp}>
          <KeyboardDoubleArrowDownIcon />
      </IconButton>
      <IconButton size="medium" color="inherit" onClick={sortItemBuyDown}>
          <KeyboardDoubleArrowUpIcon />
      </IconButton>
    <div className="container">
    {rentItems.map((item) => <Item item={item} key={item.id} />)}
    </div>
    </div>
  );
}

export default BuyItemList;
