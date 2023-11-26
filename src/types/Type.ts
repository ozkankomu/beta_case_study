export interface ISessionInitialStateType {
  sessionId: string;
}
export interface IProducts {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount: string;
}
export interface IPropProductCardLİst {
    allProducts:IProducts[]  
} 
export interface IPropProductCard {
    product:IProducts  
} 
export interface IPropSearchBar {
  setAllProducts:React.Dispatch<React.SetStateAction<IProducts[]>>  
} 
export interface IProductionCardType {
  name:string;
  price:number;
  productId:string;
  quantity:number
}

export interface ICartInitialState {
  cartSlice:ICart[]
}
export interface ICart {
  productId: string
  quantity: number
  name: string
  price: number
}
export interface IPropsModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}