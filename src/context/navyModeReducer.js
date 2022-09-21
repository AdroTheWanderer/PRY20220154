const NavyModeReducer = (state, action) =>{
    switch(action.type){
        case "LIGHT": {
            return{
                navyMode:false,
            };
        }
        case "DARK": {
            return{
                navyMode:true,
            };
        }
        case "NAVY": {
            return{
                navyMode:false,
            };
        }
        case "TOGGLE": {
            return{
                navyMode: !state.navyMode,
            };
        }
        default:
            return state;
    }
};

export default NavyModeReducer;