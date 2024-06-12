import { GameClient } from '@/components/game-client';
import { normalizeString } from '@/lib/utils';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://restcountries.com/v3.1/all?fields=name,capital,flags,translations'
    );
    const countries = response.data?.filter((country) => {
      const name = country.translations?.fra?.common;
      const capital = country.capital ? country.capital[0] : '';
      const isValid =
        name &&
        capital &&
        !name.includes(' ') &&
        !name.includes('-') &&
        !capital.includes(' ') &&
        !capital.includes('-');
      return isValid;
    });
    if (countries.length > 0) {
      const randomCountry =
        countries[Math.floor(Math.random() * countries.length)];
      return {
        flag: randomCountry.flags?.svg,
        name: normalizeString(randomCountry.translations?.fra?.common),
        capital: normalizeString(randomCountry.capital[0]),
      };
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function GamePage() {
  const randomCountry = await fetchData();
  return <GameClient randomCountry={randomCountry} />;
}
