export interface image {
  title: string;
  img: string;
}

export interface imageGallery {
  images: image[];
}

export interface UserData {
  [key: string]: any;
  name: string;
  lastName: string;
  idCard: string;
  birthDate: string;
  phone: string;
  rol?: string;
  uid?: string;
  id?: string;
}

export interface FormProps {
  open: boolean;
  setOpen: any;
  fetchData: () => void;
  postId: string | null;
}

export interface PostFormInputs {
  id?: string;
  uid?: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  image?: FileList;
  postDate: string;
}
