import { ReactNode } from "react";
import Menu from "../Menu";


const Layout = (props: { children: ReactNode }) => {
    return (
        <div className={`flex h-screen flex-col`}>
            <Menu />
            <div className="flex mx-[84px] mt-12">
                
                    {props.children}
                  
                </div>

        </div>

    );
}

export default Layout;