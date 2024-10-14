import { ITableColumns } from "../../base/interfaces";

export const CTableColumns: ITableColumns[] = [
    {
      title: 'ФИО',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Общий заработок',
      dataIndex: 'commonSalary',
      key: 'monthCount',
    },
    {
      title: 'Размер отпускных',
      dataIndex: 'vacationPay',
      key: 'vacationPay',
    },
  ]