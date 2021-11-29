export interface User {
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: string,
  address: Address,
  role: Role.staff,
  username: string,
  profilePhotoUrl: string,
  companies: Company[],
  gender: Gender.male
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
  female = 'famale',
  other = 'other'
};
