import { FC } from "react"
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
    text: string;
    isStrange?: boolean;
    delay?: number;
}

export const Message: FC<Props> = ({ isStrange = false, text, delay = 0 }) => {
    return (
        <motion.div
            className={`w-full flex ${isStrange ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay }}
        >
            <div className={`max-w-[62%] sm:max-w-[60%] rounded-xl ${isStrange ? 'bg-white' : 'bg-messageContainerColor'}`}>
                <p className={`text-[8px] p-2 ${isStrange ? 'text-gray-500' : 'text-moderateViolet '}`}>
                    {text}
                </p>
            </div>
        </motion.div>
    )
}

export default Message