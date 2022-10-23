import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadCards } from '../itemSlice';
import { selectItems } from '../selectItems';
import './ItemList.css';

function ItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);

    useEffect(() => {
        dispatch(loadCards());
      }, [dispatch]);

  return (
    <div className="container">
    {items.map((item) => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default ItemList;
