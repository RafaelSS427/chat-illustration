import { ArrowIcon } from "@/icons"


export const InputWrite = () => {
  return (
    <div className="flex justify-between items-center rounded-full w-[calc(100%-(12px*2px))] bg-white p-2 m-2">
      <input type="text" className="placeholder-gray-300 text-[10px] text-[#222] mx-2 flex-1 focus:outline-none focus:ring-0" placeholder="Type a message..." />
      <div className="w-6 h-w-6">
        <button className="bg-veryDarkDesaturatedViolet text-white w-full h-w-full flex justify-center items-center rounded-full">
            <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  )
}
