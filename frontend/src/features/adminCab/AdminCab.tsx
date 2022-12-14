import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from './apiAdmin';
import './AdminCab.css';

function AdminCab(): JSX.Element {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const [type, setType] = useState<string>('');
  const [capacity, setCapacity] = useState<number>(0);
  const [range, setRange] = useState<number>(0);
  // const [img, setImg] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);

  function handleItemSubmit(event: React.FormEvent<HTMLFormElement>): void {
    // eslint-disable-next-line no-restricted-globals
    event!.preventDefault();
    // const newItem: CredentialsItem = {
    //   title, category, price, description, type, capacity, range, img, amount
    // };

    const data = new FormData(event.target as HTMLFormElement);
    // data.append('1', img)
    api.addItem(data);
    navigate('/commodity-matrix');
  }

  function handleTitleChange(inputTitle: string): void {
    setTitle(inputTitle);
  }
  function handleCategoryChange(inputCategory: string): void {
    setCategory(inputCategory);
  }
  function handlePriceChange(inputPrice: number): void {
    setPrice(inputPrice);
  }

  function handleDescriptionChange(inputDescription: string): void {
    setDescription(inputDescription);
  }

  function handleTypeChange(inputType: string): void {
    setType(inputType);
  }

  function handleCapacityChange(inputCapacity: number): void {
    setCapacity(inputCapacity);
  }

  function handleRangeChange(inputRange: number): void {
    setRange(inputRange);
  }

  // function handleImgChange(inputImg: string): void {
  //   setImg(inputImg);
  // }

  function handleAmountChange(inputAmount: number): void {
    setAmount(inputAmount);
  }

  return (
    <Container>
      <form className="form-item" onSubmit={handleItemSubmit} encType="multipart/form-data">
        <FormGroup>
          <Typography variant="h5" className="new-item-title"> ?????????? ??????????</Typography>
          <br />
          <TextField variant="outlined" margin="dense" label="????????????????" name="title" type="text" value={title} onChange={(event) => handleTitleChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="??????????????????" name="category" type="text" value={category} onChange={(event) => handleCategoryChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="????????" name="price" type="number" value={price} onChange={(event) => handlePriceChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="????????????????" name="description" type="text" value={description} onChange={(event) => handleDescriptionChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="?????? ????????????" name="type" type="text" value={type} onChange={(event) => handleTypeChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="?????????? ???????????? ????????????????????????" name="capacity" type="number" value={capacity} onChange={(event) => handleCapacityChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="?????????????????? ????????????" name="range" type="number" value={range} onChange={(event) => handleRangeChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" name="image" type="file" />

          <TextField variant="outlined" margin="dense" label="????????????????????" name="amount" type="number" value={amount} onChange={(event) => handleAmountChange(Number(event.target.value))} />
          <br />
          <div className="add-new-item-div">
            <Button type="submit" size="large" color="error" variant="outlined">????????????????</Button>
          </div>
        </FormGroup>

      </form>
    </Container>
    //  onChange={event => setImg(event.target.files![0])
  );
}

export default AdminCab;
