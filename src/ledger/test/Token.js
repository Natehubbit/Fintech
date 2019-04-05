const signaturies = {
    treasurer:'0x37b806cF4f6eFFF4f452De0B4042340eC13aBDF7',
    financeOfficer: '0x93AE41b57887f9B3abd58fdaFF80C6fc36E2Ffb5',
    president: '0x6825539c4A7CE4F05Af3Be9959d6715F5C0A51CC',

}

const Token = artifacts.require("./Token.sol");

contract('Token', accounts=>{
    
    it('Verifies token data', ()=>{
        return Token.deployed().then(instance=>{
            token = instance;
            return token.name()
        }).then(name=>{
            assert.equal(name, 'UMaTCoin', 'Token name is wrong');
            return token.symbol();
        }).then(symbol=>{
            assert.equal(symbol, 'UMC', 'Symbol is wrong')
            return token.decimals()
        }).then(decimals=>{
            assert.equal(decimals, 8, 'Decimals are wrong');
        })
    })


    it('Sets Total Supply on deployment', ()=>{
        return Token.deployed().then(a=>{
            instance = a;
            return instance.totalSupply();
        }).then(totalSupply=>{
            assert.equal(totalSupply.toNumber(), 5000000000, 'Sets total supply to 5,000,000,000')
            return instance.contractBalance();
        }).then (balance =>{
            assert.equal(balance, 5000000000, 'Allocates some amount to account')
        })
    })

    it('Assigns Signaturies and adds signaturies', ()=>{
        return Token.deployed().then(a=>{
            instance = a;
            return instance.assignSignaturies(accounts[0],accounts[1],accounts[2]);
        }).then(receipt=>{
            assert.equal(receipt.logs.length,1, 'Triggers signaturies created event')
            assert.equal(receipt.logs[0].event, 'SignaturiesCreated', 'SignaturiesCreated event')
            assert.equal(receipt.logs[0].args.treasurer, accounts[0], 'Sets Treasurer address')
            assert.equal(receipt.logs[0].args.financeOfficer, accounts[1], 'Sets Treasurer address')
            assert.equal(receipt.logs[0].args.president, accounts[2], 'Sets Treasurer address')
            return instance.addSignatory([accounts[3]]);
        })
    })
    
    it('Creates signs and approves Transactions ',()=>{
        //Creating a transaction
        return Token.deployed().then(i=>{
            instance = i
            instance.createTransaction('Wedding', 50, accounts[0]);
            console.log(1)
            return instance.createTransaction('Chop', 100, accounts[0]);
        }).then(a=>{
            console.log(2)
            return instance.saveReceipt(a.tx)
        })
        .then(a=>{
            console.log(3)
        //     // console.log(a.logs[0].args.receipts)
        //     instance.signTransaction(accounts[0],1,accounts[1])
        //     instance.signTransaction(accounts[0],1,accounts[2])
        //     instance.signTransaction(accounts[0],1,accounts[3])
        //     return instance.approve(accounts[0],1,accounts[0])
            return instance.getPendingTransaction(0,{from:accounts[0],gas:500000})
        }).then(a=>{
            console.log(a)
            // console.log(a.logs[0].args.pendingTrans);
            // let ray = new Array(a.toNumber())
            
            // console.log('Length: ',a.toNumber());

            // for(let i=0; i<a.toNumber(); i++){
                
            //     return instance.pendingTransactions.call(i)
            //     .then(a=>{
            //         console.log('hello')
            //         console.log('Arr value',a)
                        
            //     })
            // }
            // return ray;
        }).then(a=>{
            // const arr = a.map(i=>{
                
            // })
            // console.log('Ray: ',a);
            // return ins.pendingTransactions.call();
        })
        // .then(a=>{
        //     console.log(4)
        //     // console.log('approve')
        //     // console.log('view signed Transactions: ', a.logs[0].args.sig)
        //     // console.log('view Pending')
        //     return instance.viewPendingTransactions()
        // }).then(a=>{
        //     console.log(5)
        //     console.log('Pending Transactions: ',a.logs[0].args.pendingTrans);
        //     return instance.viewSignedTransactions()
        // }).then(a=>{
        //     console.log('Signed Transactions: ',a.logs[0].args.signedTrans)
        // })
        // .then(a=>{
        //     console.log(a.logs[0].args.no_signed);
        // })
    })
    
})
