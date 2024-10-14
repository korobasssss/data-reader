import { expect, test, describe } from "vitest"
import { parseData } from "./parseData"
import { JsonDataType } from "../../types"
import { Person } from "../../interfaces"

describe('tests parse data', () => {
    test('1', () => {
        const arr: JsonDataType[] = [
            ['Иванов И.И', 2020, 1, 20000]
        ]
        const persons: Person[] = [{
            name: 'Иванов И.И',
            year: 2020,
            monthCount: 1,
            commonSalary: 20000,
            vacationPay: 18729.1
        }]
        expect(parseData(arr)).toStrictEqual(persons)
    })

    test('2', () => {
        const arr: JsonDataType[] = [
            ['Иванов И.И', 2020, 1, 20000],
                [null, 2020, 2, 30000],
            ['Петров П.П.', 2020, 1, 50000],
                [null, 2020, 2, 30000],
                [null, 2020, 3, 30000],
        ]
        const persons: Person[] = [
            {
                name: 'Иванов И.И',
                year: 2020,
                monthCount: 2,
                commonSalary: 50000,
                vacationPay: 23411.37
            },
            {
                name: 'Петров П.П.',
                year: 2020,
                monthCount: 3,
                commonSalary: 110000,
                vacationPay: 34336.68
            }
        ]
        expect(parseData(arr)).toStrictEqual(persons)
    })
})
