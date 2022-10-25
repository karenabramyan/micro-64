import { Typography } from '@mui/material';
import React from 'react';
// import { useSelector } from 'react-redux';

function AdminOrders(): JSX.Element {
    // const dispatch = useAppDispatch();

    // const items = useSelector(selectItems);

    // useEffect(() => {
    //     dispatch(loadCards());
    //   }, [dispatch]);

  return (
    <div className="container">
        <Typography variant="h5">Заказы клиентов</Typography>
    {/* {items.map((item) => <Item item={item} key={item.id} />)} */}
    </div>
  );
}

export default AdminOrders;
