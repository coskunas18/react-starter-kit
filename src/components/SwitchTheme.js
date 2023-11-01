import {useSite} from "../context"

export default function SwitchTheme(){
    const {theme,dispatch} = useSite()

    const switchTheme = () => {
        dispatch({
            type:'TOGGLE_THEME',
        })
    }

    return (
        <>
             Mevcut Tema = {theme} <br />
            <button onClick={switchTheme}>Temayı değiştir</button>
        </>
    )
}