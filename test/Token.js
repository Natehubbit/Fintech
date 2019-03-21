const Token = artifacts.require("./Token.sol");

contract('Token', a=>{
    it('Sets Total Supply on deployment', ()=>{
        return Token.deployed().then(a=>{
            instance = a;
            return instance.totalSupply();
        }).then(totalSupply=>{
            assert.equal(totalSupply.toNumber(), 5000000000, 'Sets total supply to 5,000,000,000')
            return instance.balanceOf(a[0])
        }).then (balance =>{
            assert.equal(balance.toNumber(), 5000000000, 'Allocates some amount to account')
        }).then(()=>{
            return instance.assignSignaturies("0x37b806cF4f6eFFF4f452De0B4042340eC13aBDF7","0x93AE41b57887f9B3abd58fdaFF80C6fc36E2Ffb5","0x6825539c4A7CE4F05Af3Be9959d6715F5C0A51CC");
        }).then(a=>{
            return instance.addSignatory(["0xf4a4cCffA637b8bE520AF3B0338Ba0Dc98B39776","0x8A66A72772451152F644bfdC0c114176f1f86f55"])
        })
    })

    
})
