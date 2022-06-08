
interface IName {
  title: string;
  first: string;
  last: string;
};

interface ILocation {
  street: {
    number: number;
    name: string;
  }
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

interface IDate {
  date: string;
  age: number;
};

interface IID {
  name: string;
  value: string;
};

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
};

export interface IRandomUserDTO {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDate;
  registered: IDate;
  phone: string;
  cell: string;
  id: IID;
  picture: IPicture;
  nat: string;
};
