export interface Users {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: Address,
  role: Role,
  username: string,
  profilePhotoUrl: string,
  companies?: Company[],
  gender: Gender
  };

interface Address {
  city: string,
  street: string,
  postalCode: string
};

export enum Role {
  staff = 'staff',
  student = 'student',
  manager = 'manager',
  admin = 'admin'
};

interface Company {
  id: number,
  name: string,
  description: string,
  location: Address
};

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other'
};
