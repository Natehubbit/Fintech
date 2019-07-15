// import { INIT_DRIZZLE } from "../../container/data";
// import drizzle from '../../../ledger/drizzle/options'

// let d = {
//     loading,drizzleState
// }

// this.unsubscribe = drizzle.store.subscribe(()=>{
//     let loading = true
//     const drizzleState = drizzle.store.getState();
//     if(drizzleState.drizzleStatus.initialized){
//         d.loading  = loading,
//         d.drizzleState = drizzleState
//     }
// })

// export default (state=d, action) => {
//     switch (action.type) {
//         case INIT_DRIZZLE:
//             return action.data
//         default:
//             return state;
//     }
// }