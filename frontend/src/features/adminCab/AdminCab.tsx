import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
// import { type } from 'os';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import CredentialsItem from './types/CredentialsItem';
import * as api from './apiAdmin';

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
          <Typography variant="h5"> Новый товар</Typography>
          <br />
          <TextField variant="outlined" margin="dense" label="Название" name="title" type="text" value={title} onChange={(event) => handleTitleChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Категория" name="category" type="text" value={category} onChange={(event) => handleCategoryChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Цена" name="price" type="number" value={price} onChange={(event) => handlePriceChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="Описание" name="description" type="text" value={description} onChange={(event) => handleDescriptionChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Тип сделки" name="type" type="text" value={type} onChange={(event) => handleTypeChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Время работы аккумулятора" name="capacity" type="number" value={capacity} onChange={(event) => handleCapacityChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="Дальность работы" name="range" type="number" value={range} onChange={(event) => handleRangeChange(Number(event.target.value))} />

          {/* <input type="file" name="image"/> */}
          <OutlinedInput variant="outlined" margin="dense" name="image" type="file" />
          <TextField variant="outlined" margin="dense" label="Количество" name="amount" type="number" value={amount} onChange={(event) => handleAmountChange(Number(event.target.value))} />
          <br />
          <Button type="submit" size="large" color="error" variant="contained">Добавить</Button>
        </FormGroup>

      </form>
    </Container>
    //  onChange={event => setImg(event.target.files![0])
  );
}

export default AdminCab;
