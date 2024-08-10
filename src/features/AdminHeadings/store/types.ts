export interface PostHeadingState {
  title: string;
  image: File;
}

export interface HeadingState {
  id: number;
  title: string;
  image: string;
}

export interface HeadingSliceState {
  items: HeadingState[] | null;
  isLoading: boolean;
  error: any;
}
