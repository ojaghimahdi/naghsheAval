import { SubmitHandler, useForm } from "react-hook-form";
import { TFibonacci } from "../types";
import { useState } from "react";

const Fibonacci = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TFibonacci>()

    const [result, setResalt] = useState({ before: "-", current: "-", after: "-" })
    let befor = 0, after = []
    const calcFibonacci = (n: number) => {
        let a = 0, b = 1, c;
        for (let i = 2; i <= n + 2; i++) {
            c = a + b;
            if (c <= n) {
                befor = c
            } if (c > n) {
                after.push(c)
            }
            a = b;
            b = c;
        }
        setResalt({ after: after[0].toString(), before: befor.toString(), current: n.toString() })
    }
    const onSubmit: SubmitHandler<TFibonacci> = (data) => {
        calcFibonacci(Number(data.number))
    }
    return (
        <div className="w-full place-content-center items-center flex flex-col">
            <div className="flex mb-14 ">
                <h1 className="font-bold text-5xl">Fibonacci </h1>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[696px] place-content-center items-center flex flex-col" >
                <div className="bg-white py-6 w-full">
                    <div className="w-full">
                        <label className={`block text-gray-700 text-sm font-bold mb-2 lblRequred`} htmlFor="name">
                            Enter Your Number
                        </label>
                        <input
                            {
                            ...register("number", {
                                required: { message: "num must fill", value: true },

                            })
                            }
                            className=" text-center appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" />
                        <p className="text-red-500 text-xs italic">{errors.number?.message}</p>

                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg py-6 px-6 border flex flex-row-reverse  border-gray-200 w-full mt-5">
                    <input className="bg-black text-white px-11 py-2  rounded-lg cursor-pointer" type="submit" />
                </div>
            </form>
            <hr className="w-full mt-8" />
            <div className="text-left flex self-start mt-10 font-bold mb-2 ml-2">
                <h4>Result</h4>

            </div>
            <div className="flex flex-col border rounded-lg">
                <div className="flex p-2">
                    <span className=" bg-gray-200 px-[100px] py-12 mx-2 font-bold text-4xl">{result.before}</span>
                    <span className=" bg-gray-200 px-[100px] py-12 mx-2 font-bold text-4xl">{result.current}</span>
                    <span className=" bg-gray-200 px-[100px] py-12 mx-2 font-bold text-4xl">{result.after}</span>


                </div>


            </div>
        </div>
    );
}

export default Fibonacci;