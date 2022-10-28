import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item';
import { useAppDispatch } from '../../../store';
import { loadCards } from '../itemSlice';
import { selectItems } from '../selectItems';
import './ItemList.css';
import { selectLikes } from '../../favorites/selectLikes';

function ItemList(): JSX.Element {
    const dispatch = useAppDispatch();

    const items = useSelector(selectItems);
    const likes = useSelector(selectLikes);

    useEffect(() => {
   dispatch(loadCards());
      }, [dispatch]);

  return (
    <div className="container">
    {items.map((item) => (
<Item
  item={item}
  key={item.id}
  liked={(likes.filter((likeItem) => likeItem.id === item.id)).length > 0}
/>
))}
    </div>
  );
}

export default ItemList;
