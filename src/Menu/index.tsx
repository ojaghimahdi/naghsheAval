import { useState } from "react"
import { IMenu } from "../types"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const [active, setActive] = useState("listuser")
    const navigate = useNavigate()
    const menus: IMenu[] = [
        { desc: "List Item", name: "listuser" },
        { desc: "Fibonacci", name: "Fibonacci" },
        { desc: "Collatz Conjecture", name: "Collatz" },
    ]
    const onClick = (name: string) => {
        setActive(name)
        navigate(`/${name}`)
    }
    return (
        <div className="flex items-center justify-center h-9 bg-white border-b border-b-0-gray-200  w-full">
            <div className="flex items-center">

                {menus.map(menu => {
                    return (
                        <div key={menu.name} onClick={() => { onClick(menu.name) }} className="group  flex align-middle place-items-center  ml-5 mr-20 cursor-pointer relative ">

                            <p className={`ml-2 ${active === menu.name ? 'font-bold text-black' : 'text-gray-500'} `}>{menu.desc}</p>
                            <div className={`group-hover:border-b-3 border-solid border-black absolute top-7 w-full h-[3px] ${active === menu.name ? "border-b-4" : ""}`}></div>
                        </div>

                    )
                })}





            </div>
        </div>);
}

export default Menu;