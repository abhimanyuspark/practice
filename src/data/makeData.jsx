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
    role: faker.helpers.arrayElement(["employee", "client"]),
    name: faker.person.fullName(),
    password: faker.internet.password(),
    date: faker.date.between({ from: "2021-01-01", to: "2023-12-01" }),
    profile: faker.image.avatar(),
    age: faker.number.int({ min: 25, max: 50 }),
    visits: faker.number.int(1000),
    progress: faker.number.int({ min: 40, max: 90 }),
    status: faker.helpers.arrayElement([
      { name: "Pending", color: "yellow", id: faker.string.uuid() },
      { name: "Inprocess", color: "#159afb", id: faker.string.uuid() },
      { name: "Complete", color: "#0cf90c", id: faker.string.uuid() },
    ]),
    statusMenu: [
      { name: "Pending", color: "yellow", id: faker.string.uuid() },
      { name: "Inprocess", color: "#159afb", id: faker.string.uuid() },
      { name: "Complete", color: "#0cf90c", id: faker.string.uuid() },
    ],
    theme: faker.helpers.arrayElement([true, false]),
    followUp: faker.helpers.arrayElement([{ type: "Yes" }, { type: "No" }]),
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
