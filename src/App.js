import './App.css';
import React from 'react' 

import {generateRandomSeed, generateAddressFromSeed, AddressObj} from './helper'

const DEFAULT_ITERATIONS = 1000;

export default class PaperWalletGeneratorForm extends React.Component {

  componentDidMount() {
    // Set title of page
    document.title = "Vite Paper Wallet Generator"
  }

  constructor(props) {
    super(props);

    // Initialize values
    const initSeed = generateRandomSeed();
    const initAddress = generateAddressFromSeed(initSeed);

    // Define state
    this.state = {
        seed: initSeed,
        address: initAddress.address
      };
      
  }

  // Text in seed textfield modified
  handleSeedChanged(event) {
    console.log("Seed changed");
    // Grab seed
    var state= this.state;
    var seed  = event.target.value;
    state.seed = seed;
    // Generate address from seed
    const initAddress = generateAddressFromSeed(seed);
    state.address = initAddress.address;
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

  // Generate new random seed
  generateSeed(event) {
    const seed = generateRandomSeed();
    console.log("Seed is ", seed)
    // Set the result of the search
    var state = this.state;
    state.seed = seed;
    // Generate address from seed
    const initAddress = generateAddressFromSeed(seed);
    state.address = initAddress.address;
    this.setState({ state : state });
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


