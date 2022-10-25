import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import itemSlice, { loadCards } from '../cards/itemSlice';
import { selectAdminItems } from './selectAdminItems';
import AdminItem from './AdminItem';

function CommodityMatrix(): JSX.Element {
  const dispatch = useAppDispatch();
  const items = useSelector(selectAdminItems);

  useEffect(() => {
    dispatch(loadCards());
  }, [dispatch]);
  return (
    <div className="container">
      {items.map((item) => <AdminItem item={item} key={item.id} />)}
    </div>
  );
}

export default CommodityMatrix;
