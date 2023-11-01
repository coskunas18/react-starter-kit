export default function reducer(state,action) {

    switch (action.type) {
        case "TOGGLE_THEME":
            const theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem('theme',theme)
            return{
                ...state,
                theme
            }

        case "TOGGLE_LANGUAGE":
            return{
                ...state,
                language:state.language === "tr" ? "en" : "tr",
            }


    }
    
}