export interface User {
    login: { uuid: string; username: string };
    email: string;
    picture: { medium: string };
    name: { first: string; last: string };
    dob: { date: string };
    nat: string;
    gender: string; 
  }
  