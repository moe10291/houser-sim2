const intialState={
    name:"",
    address:"",
    city: "",
    state: "",
    zip: "",
}

const UPDATENAME= "UPDATENAME"
const UPDATEADDRESS= "UPDATEADDRESS"
const UPDATECITY= "UPDATECITY"
const UPDATESTATE= "UPDATESTATE"
const UPDATEZIP= "UPDATEZIP"

function reducer(state= intialState, action){
    switch(action.type){
        case UPDATENAME:
        return Object.assign({}, state, {name: action.payload});

        case UPDATEADDRESS:
        return Object.assign({}, state, {address: action.payload});


        case UPDATECITY:
        return Object.assign({}, state, {city: action.payload});


        case UPDATESTATE:
        return Object.assign({}, state, {state: action.payload});


        case UPDATEZIP:
        return Object.assign({}, state, {zip: action.payload});
    }
}



export function updateName(name){
    return {
        type: UPDATENAME,
        payload: name
    };
}


export function updateAddress(address){
    return {
        type: UPDATEADDRESS,
        payload: address
    };
}


export function updateCity(city){
    return {
        type: UPDATECITY,
        payload: city
    };
}


export function updateState(state){
    return {
        type: UPDATESTATE,
        payload: state
    };
}


export function updateZip(zip){
    return {
        type: UPDATEZIP,
        payload: zip
    };
};

export default reducer;