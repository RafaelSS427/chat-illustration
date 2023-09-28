import { motion } from 'framer-motion'

interface Props {
    text: string;
    price: string;
    delay: number;
}

export const BuyMsg = ({ text, price, delay }: Props) => {
    return (
        <motion.div
            className="w-[75%] flex justify-between items-center rounded-xl p-2 bg-gradient-to-r from-lightMagenta to-lightViolet text-white text-[8px]"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay }}
        >
            <div className="flex gap-3 items-center">
                <div className="rounded-full w-4 h-4 border border-[rgba(255,255,255,0.3)]" />
                <p className="mt-[2px]">{text}</p>
            </div>
            <strong className="text-xs pr-2">${price}</strong>
        </motion.div>
    )
}