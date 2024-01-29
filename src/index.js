import store from './store'
import { bugAdder, bugResolver } from './actions';


store.dispatch(bugAdder("Bug 1"));
store.dispatch(bugResolver(1));


console.log(store.getState());
