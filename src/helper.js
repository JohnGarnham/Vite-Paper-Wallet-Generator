"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexString = exports.searchAddresses = void 0;
var vitejs_1 = require("@vite/vitejs");
var getRandomValues = require('get-random-values');
// Returns true if address matches our criteria
function isMatch(address, use_prefix, prefix, use_suffix, suffix) {
    // Chop off vite_
    var addr = address.substring(5);
    // Check matching prefix 
    if (use_prefix) {
        // Fail on null or empty string
        if (prefix == null)
            return false;
        // Fail on mismatch
        if (!addr.startsWith(prefix.toLowerCase()))
            return false;
    }
    // Check matching suffix
    if (use_suffix) {
        // Fail on null or empty string
        if (suffix == null)
            return false;
        // Fail on mismatch
        if (!addr.endsWith(suffix.toLowerCase()))
            return false;
    }
    // If you reached here, you've won! :)
    return true;
}
// Generate count Vite address and search for prefix or suffix 
function searchAddresses(use_prefix, prefix, use_suffix, suffix, count) {
    // Construct output string from matching addresses
    var output = "";
    // Iterate thru count addresses
    for (var i = 0; i < count; i++) {
        // Generate random 32 byte seed
        var array = new Uint8Array(32);
        getRandomValues(array);
        // Generate randomized hex string for seed
        var seed = buf2hex(array.buffer);
        // Generate an address
        var index = 0;
        var keyPair = vitejs_1.wallet.deriveKeyPairByIndex(seed, index);
        var address = vitejs_1.wallet.createAddressByPrivateKey(keyPair.privateKey);
        // Check if generated address matches criteria
        if (isMatch(address.address, use_prefix, prefix, use_suffix, suffix)) {
            var addressInfo = "Address: " + address.address + "\n" +
                "Seed: " + seed + "\n" +
                "Private Key: " + address.privateKey + "\n" +
                "Public Key: " + address.publicKey + "\n" +
                "Original Address: " + address.originalAddress + "\n\n";
            output += addressInfo;
        }
    }
    // Return output string
    return output;
}
exports.searchAddresses = searchAddresses;
// Returns whether or not str is valid hex string
function isHexString(str) {
    var re = /^([0-9A-Fa-f])*$/;
    return (re.test(str));
}
exports.isHexString = isHexString;
// Convert buffer to hex string
function buf2hex(buffer) {
    return __spreadArray([], __read(new Uint8Array(buffer))).map(function (x) { return x.toString(16).padStart(2, '0'); }) // Convert to hex, pad with 0
        .join('');
}
