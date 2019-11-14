import { Data } from "./interfaces";

function optionalChaining(): void {
  const data: Data = {
    user: {
      firstName: 'Anthon',
      lastName: 'Holmvist',
    }
  };

  // ? name will be defined with 'Anthon' as value
  const firstName = data.user?.firstName;
  // ? countryName will be undefined without error
  const countryName = data.user?.country?.name

  console.info('name:', firstName);
  console.info('countryName:', countryName);
}

optionalChaining();