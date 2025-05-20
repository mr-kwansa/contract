import {create} from 'zustand';
import {AuthState} from '../types/type';

export const AuthStore = create<AuthState>(set => ({
  segment: 0,
  setSegment: index => set({segment: index}),
}));
