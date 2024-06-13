import { User } from './User';

export const extractNationalities = (users: User[]): string[] => {
  const nationalities = new Set(users.map(user => user.nat));
  return Array.from(nationalities);
};

export const filterUsersByDOB = (users: User[], startDate: Date, endDate: Date): User[] => {
  return users.filter(user => {
    const dob = new Date(user.dob.date);
    return dob >= startDate && dob <= endDate;
  });
};
