import { Photo } from '../../photos/interfaces/photos.interface';

export interface User {
  id?: number;
  email: string;
  password: string;
  photos: Photo[];
}
