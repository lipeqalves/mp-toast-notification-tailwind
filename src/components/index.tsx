import Image from 'next/image';
import imgUser from '../../public/user.jpg'
import toast from 'react-hot-toast';
import { Inter } from 'next/font/google'
interface NotifyProps {
    visible: boolean;
    id: string;
}
const inter = Inter({ subsets: ['latin'] });
export const Notify = (props: NotifyProps) => {
    return (
        <div
            className={`${props.visible ? 'animate-enter' : 'animate-leave'

                } ${inter.className} max-w-md w-[400px] h-[100px] bg-gray-900 rounded-lg pointer-events-auto flex justify-evenly ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex p-4 justify-around items-center">
                <div className="flex-shrink-0 ">
                    <Image
                        width={64}
                        height={64}
                        className="rounded-full w-16 h-16 object-cover"
                        src={imgUser}
                        alt="imagen do perfil"
                    />
                </div>
                <div className="ml-3 flex-1 items-center">
                    <p className="text-xl font-semibold text-gray-200">
                        Robozinha Rosa
                    </p>
                    <p className="mt-1 text-base w-[160px] text-gray-200 text-ellipsis overflow-hidden whitespace-nowrap" >
                        Pode passar na padaria
                    </p>

                </div>
            </div>
            <div className="my-3 w-[1px] h-[76px] rounded-3xl bg-gray-700"></div>
            <div className="flex ">
                <button
                    onClick={() => toast.dismiss(props.id)}
                    className=" border border-transparent p-4 flex items-center justify-center text-xl font-semibold text-green-300 hover:text-green-400 "
                >
                    Close
                </button>
            </div>
        </div>
    )
}