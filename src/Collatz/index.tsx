import { SubmitHandler, useForm } from "react-hook-form";
import { TCollatz, TFibonacci } from "../types";
import { useState } from "react";

const Collatz = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TCollatz>()

    const [result, setResalt] = useState("-")

    const collatzTail = (num: number, store: number[]) => {
        if (num === 1) {
            store.push(1);
            return store;
        } else if (num % 2 === 0) {
            store.push(num);
            return collatzTail(num / 2, store);

        } else {
            store.push(num);
            return collatzTail(3 * num + 1, store);
        }
    };
    const onSubmit: SubmitHandler<TCollatz> = (data) => {
        const arr: number[] = []
        collatzTail(Number(data.number), arr)
        setResalt((arr.length - 1).toString())
    }
    return (
        <div className="w-full place-content-center items-center flex flex-col">
            <div className="flex mb-14 ">
                <h1 className="font-bold text-5xl">Collatz </h1>
                <h1 className=" text-5xl">  Conjecture</h1>

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
                    <span className=" bg-gray-200 px-[100px] py-12 mx-2 font-bold text-4xl">{result}</span>


                </div>


            </div>
        </div>
    );
}

export default Collatz;