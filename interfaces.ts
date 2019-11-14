export interface Country {
  code?: string;
  name: string;
}

export interface User {
  firstName: string;
  lastName?: string;
  age?: number;
  country?: Country;
}


export interface Data {
  user?: User;
}
