import './App.css';
import React from 'react' ;
import QRCode from "react-qr-code";

import {generateRandomSeed, generateAddressFromSeed, AddressObj} from './helper'

const DEFAULT_ITERATIONS = 1000;

export default class PaperWalletGeneratorForm extends React.Component {

  constructor(props) {
    super(props);

    // Initialize values
    const initSeed = generateRandomSeed();
    const initAddress = generateAddressFromSeed(initSeed);

    // Define state
    this.state = {
        seed: initSeed,
        address: initAddress.address,
        publicKey: initAddress.publicKey,
        privateKey: initAddress.privateKey
      };
      
  }

  // Text in seed textfield modified
  handleSeedChange(event) {
    // Grab seed
    var state= this.state;
    var seed  = event.target.value;
    state.seed = seed;
    // Generate address from seed
    const initAddress = generateAddressFromSeed(seed);
    // Update state
    state.address = initAddress.address;
    state.publicKey = initAddress.publicKey;
    state.privateKey = initAddress.privateKey;
    // Log state value for debug
    console.log(JSON.stringify(state));
    // Update state
    this.setState({ state: state });
  }

  // Reset all values
  reset(event) {
    // Set all search terms to their defaults
    var search = this.state.search;
    search.prefix = "";
    search.suffix = "";
    search.use_prefix = false;
    search.use_suffix = false;
    search.iterations = DEFAULT_ITERATIONS;
    this.setState({ search: search });
    // Clear output
    var result = this.state.result;
    result.output= "";
    this.setState({ result: result });
  }

  // Generate new random seed
  generateSeed(event) {
    const seed = generateRandomSeed();
    console.log("Seed is ", seed)
    // Set the result of the search
    var state = this.state;
    state.seed = seed;
    // Generate address from seed
    const initAddress = generateAddressFromSeed(seed);
    // Update state
    state.address = initAddress.address;
    state.publicKey = initAddress.publicKey;
    state.privateKey = initAddress.privateKey;
    // Log state value for debug
    console.log(JSON.stringify(state));
    // Update state
    this.setState({ state : state });
  }

  // Print QR codes
  printQRCodes(event) {
    var prtContent = document.getElementById("output-area");
    var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  }

  render() {
  return (
      <div className="vanity-body">
        <div className="header">
          <h2>Vite Paper Wallet Generator</h2>
        </div>
        <div className="input-section">
          <div className="input-text-row"> 
            <label className="input-label">Seed:</label>
            <input type="text" className="text-input" id="seed" name="seed" 
              value={this.state.seed} onChange={this.handleSeedChange.bind(this)} />
          </div>
          <div className="input-text-row">
            <label className="input-label">Address:</label>
            <input type="text" className="text-input" id="address" name="address" 
                value={this.state.address} readOnly />
          </div>
          <div className="input-text-row">
            <label className="input-label">Public Key:</label>
            <input type="text" className="text-input" id="publicKey" name="publicKey" 
                value={this.state.publicKey} readOnly />
          </div>
          <div className="input-text-row">
            <label className="input-label">Private Key:</label>
            <input type="text" className="text-input-long" id="privateKey" name="privateKey" 
                value={this.state.privateKey} readOnly />
          </div>
        </div>
        <div className="input-button-row">
          <button type="button" className="input-button" name="Generate" onClick={this.generateSeed.bind(this)}>
            Generate New
          </button>
          <button type="button" className="input-button" name="Print" onClick={this.printQRCodes.bind(this)}>
            Print
          </button>
          <button type="button" className="input-button" name="Download" onClick={this.reset.bind(this)}>
            Download
          </button>
        </div>
        <div className="output-area" id="output-area" name="output-area">
          <div className="output-label-row">
            <label className="seed-label">Seed:</label>
            <label className="address-label">Address:</label>
          </div>
          <div className="output-row">
            <QRCode value={this.state.seed} className="qr-code"/>
            <QRCode value={this.state.address} className="qr-code"/>
          </div>
        </div>
      </div>
    );
  }

}


