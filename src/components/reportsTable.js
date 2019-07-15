import React from 'react'
import { BootstrapTable, TableHeaderColumn,  } from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';


let stats = [
    {   
        id:1,
        from:'Abraham',
        to:'Jefferson',
        amount:'500UMC',
        comments:['Good', 'Beautiful', 'Wonderful'],
        txHash: '0xsdkfhsldfweuiry78324y9w73489we7r98'
    },
    {   
        id:2,
        from:'Judas',
        to:'Henry',
        amount:'200UMC',
        comments:['Good'],
        txHash: '0xskldjflsjefsidkhfskdfkshdfshdfwifdkshf'
    },
    {   
        id:3,
        from:'Judas',
        to:'Henry',
        amount:'200UMC',
        comments:['Good'],
        txHash: '0xskldjflsjefsidkhfskdfkshdfshdfwifdkshf'
    }
]

let selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#42c2f4" 
  };

const reportsTable = () => {
    console.log('stats',stats);
  return (
    <BootstrapTable data={stats} search striped hover condensed pagination insertRow deleteRow selectRow={selectRowProp}> 
        <TableHeaderColumn isKey dataSort dataField='id'>
            Id
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField='from'>
            From
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField='to'>
            To
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField='amount'>
            Amount
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField='comments'>
            Comments
        </TableHeaderColumn>
        <TableHeaderColumn dataSort dataField='txHash'>
            Tx. Hash
        </TableHeaderColumn>
    </BootstrapTable>
  )
}

export default reportsTable
