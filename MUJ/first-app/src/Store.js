import React, { Component } from 'react';
import BarcodeReader from 'react-barcode-reader'
class Store extends Component {
    constructor (props) {
        super(props)
        this.state = {
            result: 'No result'
        }   
    }
    
    render() {
        return (
            <div id='videoview' width={this.props.width} height={this.props.height}>
                <button onClick={this.scanBarcode}>Scan Barcodes</button>
                <video
                    autoPlay
                    width={this.props.width}
                    height={this.props.height}
                    src={this.state.src}
                    muted={this.props.audio}
                    className={this.props.className}
                    playsInline
                    style={this.props.style}
                    ref={(ref) => {
                        this.video = ref;
                    }}
                />
                <canvas id="overlay" width={this.props.width} height={this.props.height}></canvas>
            </div>
        )
    }
}

export default Store;