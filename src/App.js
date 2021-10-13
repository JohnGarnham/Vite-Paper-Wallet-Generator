import './App.css';
import React from 'react' 

import {buf2hex} from './helper'

const DEFAULT_ITERATIONS = 1000;

export default class PaperWalletGeneratorForm extends React.Component {

  constructor(props) {
    super(props);

    // Define state
    this.state = {
        seed: "",
        address: ""
      };
  }

  // Text in seed textfield modified
  handleSeedChanged(event) {
    var state= this.state;
    state.seed  = event.target.value;
    console.log(JSON.stringify(state));
    this.setState({ state: state });
  }

  // Text in address textfield modified
  handleAddressChanged(event) {
    var state = this.state;
    state.address  = event.target.value;
    console.log(JSON.stringify(state));
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

  // Generate addresses
  generateSeed(event) {
    var getRandomValues = require('get-random-values');
    event.preventDefault();
    // Generate random 32 byte seed
    var array = new Uint8Array(32);
    getRandomValues(array);
    // Generate randomized hex string for seed
    const seed = buf2hex(array.buffer);
    var output = "Placeholder";
    // Set the result of the search
    var result = this.state.result;
    result.output = output;
    this.setState({ result: result });
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
              value={this.state.seed} onChange={this.handleSeedChanged.bind(this)} />
          </div>
          <div className="input-text-row">
            <label className="input-label">Address:</label>
            <input type="text" className="text-input" id="address" name="address" 
                value={this.state.address} onChange={this.handleAddressChanged.bind(this)} />
          </div>
        </div>
        <div className="input-button-row">
          <button type="button" className="input-button" name="Generate" onClick={this.generateSeed.bind(this)}>
            Generate New
          </button>
          <button type="button" className="input-button" name="Print" onClick={this.reset.bind(this)}>
            Print
          </button>
          <button type="button" className="input-button" name="Download" onClick={this.reset.bind(this)}>
            Download
          </button>
        </div>
        <div className="output-row">
          <textarea className="textarea-output" id="output" name="output" readOnly />
        </div>
      </div>
    );
  }

}


