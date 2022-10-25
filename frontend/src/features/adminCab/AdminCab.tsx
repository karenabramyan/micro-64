import { Button, TextField, Typography, Container, FormGroup } from '@mui/material';
// import { type } from 'os';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CredentialsItem from './types/CredentialsItem';
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
  const [img, setImg] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);

  function handleItemSubmit(): void {
    // eslint-disable-next-line no-restricted-globals
    event!.preventDefault();
    const newItem: CredentialsItem = {
      title, category, price, description, type, capacity, range, img, amount
    };
    api.addItem(newItem);
    navigate('/');
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

  function handleImgChange(inputImg: string): void {
    setImg(inputImg);
  }

  function handleAmountChange(inputAmount: number): void {
    setAmount(inputAmount);
  }

  return (
    <Container>
      <form className="form-item" onSubmit={handleItemSubmit}>
        <FormGroup>
          <Typography variant="h6"> Добавить новый товар</Typography>

          <TextField variant="outlined" margin="dense" label="Название" type="text" value={title} onChange={(event) => handleTitleChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Категория" type="text" value={category} onChange={(event) => handleCategoryChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Цена" type="number" value={price} onChange={(event) => handlePriceChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="Описание" type="text" value={description} onChange={(event) => handleDescriptionChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Тип сделки" type="text" value={type} onChange={(event) => handleTypeChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Время работы аккумулятора" type="number" value={capacity} onChange={(event) => handleCapacityChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="Дальность работы" type="number" value={range} onChange={(event) => handleRangeChange(Number(event.target.value))} />

          <TextField variant="outlined" margin="dense" label="Изображение" type="text" value={img} onChange={(event) => handleImgChange(event.target.value)} />

          <TextField variant="outlined" margin="dense" label="Количество" type="number" value={amount} onChange={(event) => handleAmountChange(Number(event.target.value))} />
          <Button type="submit">Добавить</Button>
        </FormGroup>

      </form>
    </Container>
  );
}

export default AdminCab;
