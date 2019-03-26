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
            instance.createTransaction();
            return instance.no_signaturies()
        }).then(a=>{
            instance.signTransaction(accounts[0],0,accounts[1])
            instance.signTransaction(accounts[0],0,accounts[2])
            instance.signTransaction(accounts[0],0,accounts[3])
            return instance.approve(instance.address,accounts[2],999,0,accounts[0])
        })
    })

    
})
