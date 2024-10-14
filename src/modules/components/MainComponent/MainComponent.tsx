import { ChangeEvent, useCallback, useState } from 'react';
import * as XLSX from 'xlsx';
import { Person } from '../../interfaces';
import { JsonDataType } from '../../types';
import { parseData } from '../../utils';
import { FileInput, LabelFile, TableApp } from '../../../base/components';
import { CTableColumns } from '../../constants';

export const MainComponent = () => {
    const [data, setData] = useState<Person[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGetData = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      setError('Ошибка получения файла')
      return
    }

    const reader = new FileReader()

    reader.onload = (event : ProgressEvent<FileReader>) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;
      if (arrayBuffer) {
          const binaryStr = new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '');
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData: JsonDataType[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          jsonData.shift()
          setData(parseData(jsonData));
          setError(null)
      }
    }

    reader.onerror = () => {
      setData(null)
      setError('Ошибка чтения данных из файла')
    }

    reader.readAsArrayBuffer(file);
    event.target.value = ''
  }, [])
  

  return (
    <div className='p-5 text-white'>
      <LabelFile
        htmlFor='fileInput'
        >
          Загрузить файл
        </LabelFile>
      <FileInput
        id='fileInput'
        onChange={handleGetData}
      />
      {error && (
        <p className='py-[50px] text-red-500'>
          {error}
        </p>
      )}
      {data && (
        <div className='py-[50px]'>
          <TableApp data={data} columns={CTableColumns}/>
        </div>
      )}
    </div>
  )
}