import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Image1 from '../assets/images/table/image1.png'

const columns = [
    {
        field: 'Transactions', headerName: 'Transactions', width: 250, renderCell: (params) => {
            return (
                <div>
                    <img className='user_list_image' src={params.row.Image} alt="" />
                    {params.row.Transactions}
                </div>
            )
        }
    },
    { field: 'Amount', headerName: 'Amount', width: 150 },
    { field: 'Total', headerName: 'Total', width: 150 },
    { field: 'Status', headerName: 'Status', width: 150 },
    { field: 'Date', headerName: 'Date', width: 150 },
];

const rows = [
    { id: 1, Image: Image1, Transactions: 'USDC Deposited', Amount: '0.0154 ETH', Total: 'USD $10', Status: 'Pending', Date: 'February 21, 2021' },
    { id: 2, Image: Image1, Transactions: 'zUSD Minted', Amount: '0.3 BTC', Total: 'USD $140', Status: 'Done', Date: 'February 14, 2021' },
    { id: 3, Image: Image1, Transactions: 'zZAR Sent', Amount: '0.025 BTC', Total: 'USD $56', Status: 'Done', Date: 'February 14, 2021' },
    { id: 4, Image: Image1, Transactions: 'zNGN Swap', Amount: '0.025 BTC', Total: 'USD $56', Status: 'Done', Date: 'February 14, 2021' },
];

export default function Table() {
    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
