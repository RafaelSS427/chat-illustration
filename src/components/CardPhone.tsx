import { ArrowIcon } from "@/icons"
import { MenuIcon } from "@/icons/MenuIcon"
import { Images } from "./Images"
import { BuyMsg } from "./BuyMsg"
import { InputWrite } from "./InputWrite"
import { Message } from "./Message"


export const CardPhone = () => {
  return (
    <div className="relative shadow-[0_25px_50px_-12px_rgba(135,56,255,0.25)] bg-white w-[250px] sm:w-[275px] p-3 rounded-[30px] before:bg-white before:w-[50%] before:h-[30px] before:absolute before:mx-auto before:left-0 before:right-0 before:top-0 before:rounded-[20px]">
      <div className="bg-lightGrayishViolet w-full h-full rounded-[30px] flex flex-col gap-3">
        <div className="rounded-t-[30px] rounded-b-md px-3 pt-7 pb-2 bg-gradient-to-r from-lightViolet to-lightMagenta">

          <div className="flex justify-between items-center">

            <div className="flex">
              <div className="grid place-content-center">
                <div className="w-4 h-4">
                  <ArrowIcon direction="left" />
                </div>

              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <img src="/avatar.jpg" className="rounded-full border-2 border-white" width="24px" height="24px" alt="Avatar image" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <h6 className="text-[10px] text-white">Samuel Green</h6>
                  <small className="text-[8px] text-[rgba(255,255,255,0.4)] font-light">Available to walk</small>
                </div>
              </div>
            </div>
            <div className="w-4 h-4 stroke-white">
              <MenuIcon />
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-3 px-2">
          <Message text="That sounds great I'd be happy to discuss more." />
          <Message text="Could you send over some pictures of your dog, please?" delay={0.2} />

          <Images delay={0.4} />

          <Message text="Here are a few pictures. She's a happy girl!" isStrange delay={0.6} />
          <Message text="Can you make it?" isStrange delay={0.8}/>
          
          <Message text="She looks so happy! The time we discussed works. How long shall I take her out for?" delay={1} />

          <BuyMsg text="30 minutes walk" price="29" delay={1.2}/>
          <BuyMsg text="1 hour walk" price="49" delay={1.4}/>
        </div>

        <InputWrite />
      </div>
    </div>
  )
}
