/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import Item from '../cards/types/Item';
import Like from './types/Like';

export const selectLikes = (
    state: RootState
): Item[] => state.like.likes;

export const selectItems = (
    state: RootState
): Item[] => state.like.likes;

export const selectUserId = (state: RootState): number | undefined =>
state.auth.user?.id;
