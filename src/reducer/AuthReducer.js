export default function reducer(state,action) {

    switch (action.type) {
        case "LOGIN":
            return{
                ...state,
               user:action.payload
            }


            case "LOGOUT":
                return{
                    ...state,
                   user:false
                }

    }
    
}