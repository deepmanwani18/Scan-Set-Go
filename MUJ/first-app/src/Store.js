import React, { Component } from 'react';
import BarcodeReader from 'react-barcode-reader'
class Store extends Component {
    constructor (props) {
        super(props)
        this.state = {
            result: 'No result'
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        this.setState({
            result: data
        })
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        return (
            <div>
                <BarcodeReader
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <h1>Bar Code Reader</h1>
            </div>
        )
    }
}

export default Store;