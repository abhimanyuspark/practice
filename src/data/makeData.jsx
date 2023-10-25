import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    profile: faker.image.avatar(),
    age: faker.number.int({ min: 25, max: 50 }),
    visits: faker.number.int(1000),
    progress: faker.number.int({ min: 40, max: 90 }),
    status: faker.helpers.arrayElement([
      "relationship",
      "complicated",
      "single",
    ]),
    jobType: faker.person.jobType(),
    dis: {
      job: faker.person.jobTitle()
    }
  };
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
