
import { createContext, useContext, ReactNode } from 'react';
import toast, { Toaster } from "react-hot-toast";

import { Notify } from '@/components';
interface ToastContextProps {
    children: ReactNode;
}
interface ToastContextType {
    notify: () => void;

}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToastContext = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToastContext must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<ToastContextProps> = ({ children }) => {
    return (
        <ToastContext.Provider value={useHotToast()}>
            {children}
            <Toaster />
        </ToastContext.Provider>
    );
};

const useHotToast = (): ToastContextType => {
    const notify = () => {
        toast.custom((t) => (
            <Notify visible={t.visible} id={t.id} />
        ), {
            duration: 5000,
            position: "top-right",
        })
    }
    return {
        notify,
    };
};
