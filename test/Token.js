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
            return instance.balanceOf(accounts[0])
        }).then (balance =>{
            assert.equal(balance.toNumber(), 5000000000, 'Allocates some amount to account')
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
        }).then(()=>{
            // console.log('contract instance: ',instance)
            // console.log('signTransaction Rec', receipt);
            // assert.equal(receipt.logs.length,1, 'Triggers add signaturies created event')
            // assert.equal(receipt.logs[0].event, 'AddSignaturies', 'Signaturies Added event')
            // assert.equal(receipt.logs[0].args.signaturies[0], accounts[3], 'Sets signatory address')
            // assert.equal(receipt.logs[0].args.signaturies[1], accounts[4], 'Sets signatory address')
            // assert.equal(receipt.logs[0].args.signaturies[2], accounts[5], 'Sets signatory address')
            // console.log('DETails')
            // console.log('SIGNATURIES',instance.no_signaturies())
            // console.log('SIGNEES',instance.no_signed())
            return instance.approve(instance.address,accounts[2], 1000);
        }).then(receipt=>{
            // console.log('contract instance: ',instance)
            // console.log('signTransaction Rec', receipt);
            // assert.equal(receipt.logs.length,1, 'Triggers add signaturies created event')
            // assert.equal(receipt.logs[0].event, 'AddSignaturies', 'Signaturies Added event')
            // assert.equal(receipt.logs[0].args.signaturies[0], accounts[3], 'Sets signatory address')
            // assert.equal(receipt.logs[0].args.signaturies[1], accounts[4], 'Sets signatory address')
            // assert.equal(receipt.logs[0].args.signaturies[2], accounts[5], 'Sets signatory address')
            // return receipt.logs;
            console.log('No of signaturies ',receipt.logs)
        }).then(receipt=>{
            assert.equal(receipt.logs.length,1, 'Triggers transferFrom event')
            assert.equal(receipt.logs[0].event, 'TransferFrom', 'Transfer from event')
            assert.equal(receipt.logs[0].args._from,"0xe62F45180961EB3aE06f2A8927C40AF40C7F03D6", 'Sets Contract address')
            assert.equal(receipt.logs[0].args._to, accounts[1], 'Sets receipient address')
            assert.equal(receipt.logs[0].args._value, 1000, 'Sets value')
        })
    })

    
})
