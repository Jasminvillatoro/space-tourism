import TImages from './TImages';
export type TCrew = {
  id?: string;
  name: string;
  images: TImages;
  role?: string;
  bio?: string;
};
