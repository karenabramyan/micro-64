import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadCards } from '../itemSlice';
import { selectItems } from '../selectItems';
import './ItemList.css';

function RentItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);

    useEffect(() => {
        dispatch(loadCards());
      }, [dispatch]);

    const rentItems = useMemo(() => items.filter((el) => el.type === 'Аренда'), [items]);
  return (
    <div className="container">
    {rentItems.map((item) => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default RentItemList;
