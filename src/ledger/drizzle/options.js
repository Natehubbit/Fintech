import { Drizzle, generateStore} from 'drizzle'
import Token from '../build/contracts/Token.json'


const options = {
  contracts: [Token],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

const drizzleStore = generateStore(options)

export default new Drizzle(options,drizzleStore);