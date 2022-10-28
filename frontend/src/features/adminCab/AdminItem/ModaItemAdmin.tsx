import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useAppDispatch } from '../../../store';
import { changeItem } from '../../cards/itemSlice';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  export interface ModalWindowProps {
    open: boolean,
    handleClose: () => void,
    amountStart: any,
    priceStart: string,
    itemId: number,
  }

function ModalItemAdmin(
  { open, handleClose, amountStart, priceStart, itemId }: ModalWindowProps): JSX.Element {
  const [amount, setAmount] = useState(amountStart);
  const [price, setPrice] = useState(priceStart);

  const dispatch = useAppDispatch();

  function handleAmount(inputAmount: string): void {
    setAmount(Number(inputAmount));
  }

  function handlePrice(inputPrice: string): void {
    setPrice(inputPrice);
  }

  function changeData(itemData: { itemId: number, price: string, amount: number }): void {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    dispatch(changeItem(itemData));
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormGroup>
        <form className="form-item" onSubmit={() => changeData({ itemId, amount, price })}>
          <Typography variant="h5">Новые данные</Typography>
          <TextField variant="outlined" margin="dense" label="Количество на складе" type="text" value={amount} onChange={(event) => handleAmount(event.target.value)} />
          <br />
          <TextField variant="outlined" margin="dense" label="Цена" type="text" value={price} onChange={(event) => handlePrice(event.target.value)} />
          <br />
          <br />
          <Button type="submit" size="medium" color="inherit" variant="outlined">изменить</Button>
        </form>
        </FormGroup>
      </Box>
    </Modal>
  );
}

export default ModalItemAdmin;
