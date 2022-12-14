import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';

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
    handleClose: () => void
  }

function ModalWindowOrder({ open, handleClose }: ModalWindowProps): JSX.Element {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Ваш заказ оформлен!
      </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Для уточнения деталей звоните по телефону
        </Typography>
        <br />
        <Typography id="modal-modal-title" variant="h5" component="h2">
        +7 (917) 310-21-11
        </Typography>
      </Box>
    </Modal>
  );
}

export default ModalWindowOrder;
