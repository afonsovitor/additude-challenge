const MAIN_API_URL: string = 'https://randomuser.me/api/';
export const API_URL: string = (MAIN_API_URL + '?results=100');

export const FIELD_LABELS = {
  NAME: 'Name',
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  GENDER: 'Gender',
  EMAIL: 'E-mail',
  AGE: 'Age',
  ADDRESS: 'Address',
  CITY: 'City',
  COUNTRY: 'Country',
};

export const capitalizeString = (value: string): string => (value[0].toUpperCase() + value.slice(1));
