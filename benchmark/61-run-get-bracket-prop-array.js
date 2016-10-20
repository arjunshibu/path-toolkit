'use strict';

var kp = require( '../dist/kp-umd' ),
    tk = require( '../dist/tk-umd' ),
    
    path = '["foo","bar"]["qux"]["baz"]',
    data = {
        foo: {
            qux: {
                baz: 123
            }
        },
        bar: {
            qux: {
                baz: 456
            }
        }
    },

    tkTokens = tk.getTokens( path );

module.exports = {
    name: 'Run:Get:Bracket:Property:Array',
    maxTime: 5,
    tests: {
        'kp': function(){
            kp`["foo","bar"]["qux"]["baz"]`( data );
        }/*, Is this supported?
        'tk#get-tokenized': function(){
            tk.get( data, tkTokens );
        }
        */
    }
};