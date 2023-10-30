import { memo } from "react"

function Header(params) {
    console.log('header render edildi')
    return(
        <header>Header</header>
    )
}

export default memo(Header)

