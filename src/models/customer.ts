export interface Customer{
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface AddCustomer{
  name: string;
  email: string;
  phone: string;
  address: string;
  user_id: string;
}

