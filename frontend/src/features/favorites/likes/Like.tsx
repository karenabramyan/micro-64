import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from '../../cards/Item';
import { useAppDispatch } from '../../../store';
import { loadLikes } from './likeSlice';
import { selectLikes } from '../selectLikes';

function Like(): JSX.Element {
  const dispatch = useAppDispatch();
  const likeSelect = useSelector(selectLikes);
  // const itemSelect = useSelector(selectItems);
  // console.log(likeSelect);

  // function addLike(userId: number, itemId: number):void {
  // dispatch(createLikes({ userId, itemId }));
  // }

  useEffect(() => {
    dispatch(loadLikes());
  }, [dispatch]);

  return (
    <div className="container">
      {(likeSelect.length !== 0) && likeSelect.map((item) => <Item item={item} key={item.id} />)}
    </div>
  );
}

export default Like;
