import { useMemo } from "react"

interface Props {
    direction: "left" | 'right'
}

export const ArrowIcon = ({ direction }:Props) => {

    const d = useMemo(() => {
        switch(direction){
            case 'left':
                return 'm15 7-5 5 5 5';
            case 'right': 
                return 'm9 7 5 5-5 5'

            default:
                return 'm15 7-5 5 5 5'
        }
    }, [direction])

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={d}
            />
        </svg>
    )
}