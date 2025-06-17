export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'PG' | 'Room' | 'Apartment' | 'House';
  rent: number;
  deposit: number;
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  amenities: string[];
  images: string[];
  videos?: string[];
  availability: {
    available: boolean;
    availableFrom: Date;
    occupancy: 'single' | 'double' | 'triple';
  };
  ownerInfo: {
    name: string;
    phone: string;
    email: string;
    uid: string;
  };
  rules?: string[];
  features: {
    furnished: boolean;
    wifi: boolean;
    parking: boolean;
    laundry: boolean;
    meals: boolean;
    ac: boolean;
    bathroom: 'shared' | 'private';
  };
  ratings: {
    average: number;
    count: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  propertyId: string;
  tenantId: string;
  ownerId: string;
  startDate: Date;
  endDate?: Date;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'failed';
  totalAmount: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}