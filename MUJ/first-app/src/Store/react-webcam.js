import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './react-webcam.css';

scanBarcode() {
    if (window.reader) {
        let canvas = document.createElement('canvas');
        canvas.width = this.props.width;
        canvas.height = this.props.height
        let ctx = canvas.getContext('2d');
        ctx.drawImage(this.video, 0, 0, this.props.width, this.props.height);

        window.reader.decodeBuffer(
            ctx.getImageData(0, 0, canvas.width, canvas.height).data,
            canvas.width,
            canvas.height,
            canvas.width * 4,
            window.dynamsoft.BarcodeReader.EnumImagePixelFormat.IPF_ARGB_8888
        )
            .then((results) => {
                this.showResults(results);
            });
    }

}