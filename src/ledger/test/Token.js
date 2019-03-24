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

    it('Assigns Signaturies and performs transaction', ()=>{
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
        }).then(sign=>{
            instance.signTransaction(accounts[0]);
            instance.signTransaction(accounts[1]);
            instance.signTransaction(accounts[2]);
            instance.signTransaction(accounts[3]);
            return instance.no_signaturies()
        }).then(no_signaturies=>{
            console.log('SIGNATURIES',no_signaturies)
            return instance.no_signed();
        }).then(no_signed=>{
            
            console.log('SIGNEES',no_signed)
            return instance.approve(instance.address,accounts[2], 1000);
        }).then(receipt=>{
            assert.equal(receipt.logs.length,2, 'Triggers approve event')
            return receipt.logs;
        }).then(receipt=>{
            console.log(receipt);
        })
    })

    
})
