import React from 'react'


const TableProduct = () =>{
    let arr = [{nama:"Larry",pekerjaan:"Dev"},
                {nama:"Spongebob",pekerjaan:"Dev"},
                {nama:"Ny Puff",pekerjaan:"Dev"}
            ]
        
            return (
                <table >
                   <thead>
                        <tr>
                            <td> Nama</td>
                            <td>Pekerjaan</td>
                        </tr>
                   </thead>
                   <tbody>
                        {arr.map(({nama, pekerjaan}) =>{
                            return (<tr>
                                <td>{nama}</td>
                                <td>{pekerjaan}</td>
                            </tr>)
                            }
                        )
                        }
                   </tbody>
                </table>
            )
}

export default TableProduct