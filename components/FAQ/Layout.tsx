import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import down from "./down.svg";
import Accordion from './Accordion';
import './Layout.css'
import '/app/globals.css'

type Props = {
    question :string,
    answer: string,
    idx: number
}

interface LayoutProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isSomeActive: any,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    data: Props[]
}

const Layout = ({data, turn, setTurn}:LayoutProps) => {
  return (
    <div className='content-center px-12 pt-10 bg-[url("../public/bg2.avif")]'>
        <h4 className='px-7'>
            Frequently Asked Questions<hr className='border-gray-400'></hr>
        </h4>
      <div className='columns-1 md:columns-2 gap-5 mb-20'>
        {data.map((el,i)=>{
          return (
              <div className='w-full' key={"questions"+i}>
                  <Accordion
                  question={el.question}
                  answer={el.answer}
                  turn={turn}
                  setTurn={setTurn}
                  idx={el.idx}
                  />
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Layout