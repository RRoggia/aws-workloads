import { v4 as uuid } from 'uuid'
const companies = ["A", "B", "C", "D", "E"]
const names = ["Mateo", "Bautista", "Juan", "Felipe", "Bruno", "Noah", "Benicio", "Thiago", "Ciro", "Liam"]
const jobs = ["Cashier", "Food preparation worker", "Stocking associate", "Laborer", "Janitor", "Construction worker"]
const MAX_AGE = 100

export function generateNewEmployee(): {
  id: string,
  name: string,
  age: string
  jobs: string[],
  year: string,
  month: string
} {
  return {
    id: companies[Number((Math.random() * companies.length).toFixed(0))],
    name: names[Number((Math.random() * names.length).toFixed(0))],
    age: (Math.random() * MAX_AGE).toFixed(0),
    jobs: jobs
      .filter(j => (Number((Math.random() * 10).toFixed()) / 2).toFixed() === "0" ? true : false)
      .concat("NONE"),
    year: (Math.random() * 2000).toFixed(0),
    month: (Math.random() * 11).toFixed(0),
  }
}
