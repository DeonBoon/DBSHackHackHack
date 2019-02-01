import httpstore from "./HTTPStore";
import rootStore from "./RootStore";

/** This class contains a reference to all the stores used in the application */
class Stores {
	HTTPStore = httpstore;
	RootStore = rootStore;
}

const stores = new Stores();
export default stores;
