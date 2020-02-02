import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: 1000,
            result: 'No result',
            product: '',
            price: '',
            company: ''
        }

        this.handleScan = this.handleScan.bind(this)
    }
    handleScan(data) {
        this.setState({
            result: data,
        })
        if(this.state.result) {
            let content = this.state.result.split('-');
            let product = content[0];
            let price = content[1];
            let company = content[2];
            this.props.additem({product, price, company});
        }
    }
    handleError(err) {
        console.error(err)
    }
    render() {
        const previewStyle = {
            height: 800,
            width: 900,
        }

        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default Demo

// import React, { Component } from 'react';
// import { ScanSettings, Barcode } from "scandit-sdk";

// import BarCodePicker from './Barcode';

// class Demo extends Component {
//     render() {
//         return (
//             <BarCodePicker
//                 playSoundOnScan={true}
//                 vibrateOnScan={true}
//                 scanSettings={
//                     new ScanSettings({
//                         enabledSymbologies: ["qr", "ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf"],
//                         codeDuplicateFilter: 1000
//                     })
//                 }
//                 onScan={scanResult => {
//                     document.getElementById("scandit-barcode-result").innerHTML = scanResult.barcodes.reduce(function (
//                         string,
//                         barcode
//                     ) {
//                         return string + Barcode.Symbology.toHumanizedName(barcode.symbology) + ": " + barcode.data + "<br>";
//                     },
//                         "");
//                 }}
//                 onError={error => {
//                     console.error(error.message);
//                 }}
//                 />
//         )
//     }
// }

// export default Demo;