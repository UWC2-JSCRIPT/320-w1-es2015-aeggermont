import people from './people.json';

people.forEach((person) => {
  const [firstName, lastName] = person.name.split(' ');
  /* eslint-disable no-console */
  console.log(`First name: ${firstName} \nLast name: ${lastName} \nEmail: ${person.email} \nPhone number: ${person.phone}\n`);
});
