import { Person } from "../interfaces";
import { JsonDataType } from "../types";

export const parseData = (jsonData: JsonDataType[]): Person[] => {
    const parsedData: Person[] = [];

    for (let i = 1; i < jsonData.length; i++) {
        const row: JsonDataType = jsonData[i];
        if (row[0]) {
          const person: Person =  {
            name: row[0],
            year: row[1],
            monthCount: row[2],
            commonSalary: row[3],
            vacationPay: 0
          }
          parsedData.push(person)
        } else {
          parsedData[parsedData.length - 1].monthCount = row[2]
          parsedData[parsedData.length - 1].commonSalary += row[3]
        }
    }

    parsedData.forEach(data => {
      data.vacationPay = parseFloat(((data.commonSalary / data.monthCount) / 29.9 * 28).toFixed(2))
    })

    return parsedData;
};