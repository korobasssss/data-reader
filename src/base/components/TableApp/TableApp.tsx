import { Table } from "antd"
import styled from "styled-components"
import { ITableColumns } from "../../interfaces"

const StyledTable = styled(Table)`
    .ant-table {
        border: 1px solid white;
        border-radius: 5px;
        color: white;
    }

    .ant-table-thead > tr > th {
        background-color: transparent;
        color: white;
        
        font-size: 20px;
    }

    .ant-table {
        width: max-content;
        background-color: transparent;
        color: white;
        font-size: 18px;
    }

    .ant-table-cell:nth-child(2),
    .ant-table-cell:nth-child(3) {
        text-align: center;
    }

    .ant-table-cell-row-hover {
        background-color: #4F3C3C !important;
        color: white;
    }

    .ant-pagination {
        display: none;
    }
`

interface ITableApp<T> {
    columns: ITableColumns[]
    data: T[]
}

export const TableApp = <T,>({
    columns,
    data
} : ITableApp<T>) => {
    return (
        <StyledTable columns={columns} dataSource={data}/>
    )
}