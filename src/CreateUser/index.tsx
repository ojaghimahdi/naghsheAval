import { useForm, SubmitHandler } from "react-hook-form"
import "../App.css"
import { useUserStore } from "../Store/store/UserStore"
import { useSearchParams } from "react-router-dom"
import { TCreateUserInputs } from "../types"




export default function CreateUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TCreateUserInputs>()
  const { addUser, users, selectedUser, updateUser } = useUserStore()
  const [searchParams,] = useSearchParams()
  const isNewMode = searchParams.get("mode") === "add"
  console.log(isNewMode)
  const onSubmit: SubmitHandler<TCreateUserInputs> = (data) => {
    if (isNewMode) {
      addUser({ user: { email: data.email, item: users.length + 1, name: data.name, phone: data.phone, status: data.status === "null" ? null : data.status, userName: data.userName } })

    } else {
      if (selectedUser !== null) {
        updateUser({ user: { email: data.email, item: selectedUser.item, name: data.name, phone: data.phone, status: data.status === "null" ? null : data.status, userName: data.userName } })

      }
    }
  }


  // watch input value by passing the name of it


  return (
    <div className="w-full">
      <div className="w-full place-content-center items-center flex flex-col">
        <div className="flex mb-14">
          <h1 className="font-bold text-5xl"> {isNewMode ? "Create" : "Edit"} </h1>
          <h1 className="text-5xl"> {isNewMode ? "New Item" : "Item"}</h1>

        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="bg-white shadow-md rounded-lg py-6 px-6 border border-gray-200">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className={`block text-gray-700 text-sm font-bold mb-2 lblRequred`} htmlFor="name">
                Name
              </label>
              <input
                {
                ...register("name", {
                  required: { message: "name must fill", value: true },
                  value: selectedUser?.name
                })
                }
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" />
              <p className="text-red-500 text-xs italic">{errors.name?.message}</p>

            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2 lblRequred" htmlFor="username">
                UserName
              </label>
              <input {
                ...register("userName", {
                  required: { message: "username must fill", value: true },
                  value: selectedUser?.userName
                })
              } className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
              <p className="text-red-500 text-xs italic">{errors.userName?.message}</p>

            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2 lblRequred" htmlFor="Email">
                Email
              </label>
              <input
                {
                ...register("email", {
                  value: selectedUser?.email,
                  required: { message: "email must fill", value: true }, pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  }
                })
                }
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" />
              <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2 lblRequred" htmlFor="username">
                Phone
              </label>
              <input {
                ...register("phone", {
                  value: selectedUser?.phone,
                  required: { message: "phone must fill", value: true },
                })
              } className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Phone" type="text" />
              <p className="text-red-500 text-xs italic">{errors.phone?.message}</p>

            </div>

          </div>
          <hr className="w-full" />
          <div className="grid grid-cols-3 gap-3">
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                {
                ...register("status", {
                  value: selectedUser?.status === null ? "null" : selectedUser?.status
                })
                }
                id="Status" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="active">Active</option>
                <option value="not_active">NotActive</option>
                <option value={"null"}>Unknown</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg py-6 px-6 border flex flex-row-reverse  border-gray-200 w-full mt-12">
          <input className="bg-black text-white px-11 py-2  rounded-lg cursor-pointer" type="submit" />
        </div>
      </form>

    </div>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit"
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue="test" {...register("example")} />


    
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
    */
  )
}