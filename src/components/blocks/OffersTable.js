import {Box} from '@rebass/grid'
import React from 'react'
import OffersTableHeader from './OffersTableHeader'
import OffersTableRow from './OffersTableRow'

class OffersTable extends React.Component {
    constructor() {
        super()
        this.setOrder = this.setOrder.bind(this)
        this.state = {
            order: [null, false]
        }
    }
    setOrder(by, asc) {
        this.setState(state => ({...state, order: [by, asc]}))
    }
    render() {
        const {rows} = this.props
        const {order} = this.state
        const {setOrder} = this
        const [by, asc] = order
    
        const sortedRows = rows.sort((a, b) => asc ? a.fields[by] - b.fields[by] : b.fields[by] - a.fields[by])
            
        return (
            <Box
            style={{
            }}>
                <OffersTableHeader order={order} setOrder={setOrder}/>
                {sortedRows.map((row, index) => <OffersTableRow key={index} listId={index} {...row}/>)}
            </Box>
        )
    }
}

export default OffersTable