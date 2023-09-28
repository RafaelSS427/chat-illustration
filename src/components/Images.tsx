import { motion } from 'framer-motion'

const imageSize = "40px"

interface Props {
    delay: number
}

export const Images = ({ delay }: Props) => {
    return (
        <motion.div
            className="w-full flex justify-end"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay }}
        >
            <div className="max-w-[65%] flex gap-2">
                <img
                    className="rounded-md"
                    src="/dog-image-1.jpg"
                    alt="Dog image 1"
                    width={imageSize}
                    height={imageSize}
                />
                <img
                    className="rounded-md"
                    src="/dog-image-2.jpg"
                    alt="Dog image 1"
                    width={imageSize}
                    height={imageSize}
                />
                <img
                    className="rounded-md"
                    src="/dog-image-3.jpg"
                    alt="Dog image 1"
                    width={imageSize}
                    height={imageSize}
                />
            </div>
        </motion.div>
    )
}
