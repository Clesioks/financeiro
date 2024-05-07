import * as C from './styles'
import { useState, useEffect } from "react"
import {items} from './../../data/items'
import { getCurrentMonth, filterListByMonth } from './../../helpers/dateFilter'
import { TableItem } from '../TableItem'



export const TableArea = (  ) => {   

const   [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState([])
  const [currentMonth, setCurrentMonth ] = useState(getCurrentMonth())

  useEffect( () => {
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth] )

        
    return (
        <C.Table>
            <thead>
                    <tr>
                        <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                        <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                        <C.TableHeadColumn>Título</C.TableHeadColumn>
                        <C.TableHeadColumn width={145}>Valor</C.TableHeadColumn>
                    </tr>
            </thead>
            <tbody>
            {/* {filteredList.map((item, index) => (
                <tr key={index}>
                    <td></td>
                    <td>{item.category}</td>
                    <td>{item.title}</td>
                    <td></td>
                </tr>
            ))} */}
            {filteredList.map((item, index) => (
                <TableItem key={index} item={item} />
            ))}
            </tbody>
        </C.Table>
    )

}