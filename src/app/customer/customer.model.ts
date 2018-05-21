export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  shippingAddress?: ShippingAddress
}

export interface ShippingAddress {
  id: string;
  line1: string;
  line2: string;
  postalCode: string;
  city: string;
  county: string;
  country: string;
}
