export interface Sale {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  paid: number;
  date: Date;
  items: [{
  	name: string;
  	partnumber: string;
  	quantity: number;
  	price: number;
  }];
}

export interface AddSale {
  id: number;
  inv_number: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  paid: number;
  date: Date;
  user_id: string;
  items: [{
  	name: string;
  	partnumber: string;
  	quantity: number;
  	price: number;
  }];
}

