import { useNavigate } from "react-router-dom";
import { useUserStore } from "../Store/store/UserStore";

const ListUser = () => {
    const columns = ['item', "name", 'userName', 'email', 'phone', 'status']
    const navigate = useNavigate()
    const rows = useUserStore((state) => state.users);
    const setSelectUser = useUserStore((state) => state.setSelectUser);
    const onClick = () => {
        setSelectUser({user:null})
        navigate({ pathname: '/createUser', search: "mode=add" })
    }
    return (
        <div className="w-full place-content-center items-center flex flex-col">
            <div className="flex mb-14">
                <h1 className="font-bold text-5xl">List </h1>
                <h1 className="text-5xl">Item</h1>

            </div>
            <div className="border-slate-400 rounded-t-lg w-full align-middle flex justify-between place-content-center border-t border-x p-5">
                <p className="text-base font-bold content-around ">Items</p>
                <button onClick={onClick} className="bg-black rounded-lg text-white py-[7px] px-[12px]">Add New Item     +</button>
            </div>
            <table className="table-auto   border border-slate-400 w-full">
                <thead className="" >
                    <tr className="bg-gray-100 row space-x-2">
                        {
                            columns.map((col) => {
                                return <th key={col} className="col py-4">{col}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => {
                            return <tr onDoubleClickCapture={() => { setSelectUser({ user: row }); navigate({ pathname: "/createUser", search: "mode=edit" }) }} className="text-center border border-b-0">

                                <td className="col py-4">{row.item}</td>
                                <td className="col py-4">{row.name}</td>
                                <td className="col py-4">{row.userName}</td>
                                <td className="col py-4">{row.email}</td>
                                <td className="col py-4">{row.phone}</td>
                                <td className={`col py-4`}><span
                                    className={`rounded-lg p-1 
                                    ${row.status === "active" ? "bg-[#EBFFF1] text-[#0FBD66]"
                                            : row.status === "not_active" ? "bg-[#FCEEEE] text-[#DC362E]" : "bg-[#F1F1F1] text-[#242424]"}
                                    `}>{row.status === "active" ? "Active" : row.status === "not_active" ? "Not Active" : "Unknown"}</span></td>



                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;