import { Box, Button, CardActions, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import User from '../../auth/types/User';
import Item from '../types/Item';
import './ModalWindow.css';
import { selectUser } from '../../auth/selectors';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  export interface ModalWindowProps {
    open: boolean,
    handleClose: () => void,
    item: Item,
    addToBasket: (user: User | undefined,
      itemId: number,
      event: React.MouseEvent<HTMLButtonElement>) => void,
  }

function ModalWindow({ open, handleClose, item, addToBasket }:
  ModalWindowProps): JSX.Element {
    const selectUs = useSelector(selectUser);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Typography id="modal-modal-description" className="modal-item-title" variant="h5">
          {item.title}
      </Typography>
      <img src={item.img} alt={item.title} className="modal-item-image" />
      <br />
        <Typography id="modal-modal-title" className="modal-item-category">
          {`Категория: ${item.category}`}
        </Typography>
        <br />
        <Typography id="modal-modal-title" className="modal-item-capacity">
          {`Емкость: ${item.capacity} час.`}
        </Typography>
        <br />
        <Typography id="modal-modal-title" className="modal-item-price">
          {`Цена: ${item.price} руб.`}
        </Typography>
        <CardActions className="modal-item-buttons">
        <Button size="medium" color="error" variant="outlined" onClick={(event) => addToBasket(selectUs, item.id, event)}>Заказать</Button>
        </CardActions>
        <Typography id="modal-modal-title" className="modal-item-description">
          {`О товаре: ${item.description}`}
        </Typography>
        <br />
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
      </Box>
    </Modal>
  );
}

export default ModalWindow;
