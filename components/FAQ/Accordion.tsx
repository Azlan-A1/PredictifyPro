import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { minus, plus } from '@/assets/images'
import '@/styles/globals.css'

type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`drop-shadow-[-5px_5px_4px_#a3a3a33d] bg-[linear-gradient(to_bottom_right,rgba(245,237,220,1),rgba(255,255,255,0.7))] px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className='py-3'>
           <div className='flex items-center justify-between h-20 text-left'>
              <h3 className='ml-2 text-xl'>{question}</h3>
              <div>
               { turn![idx] ? <Image src={minus} alt="" width={20} height={20} className='min-w-4 max-w-4'/> :
                <Image src={plus} alt="" width={20} height={20} className='min-w-4 max-w-4'/>}

              </div>
           </div>
           <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-lg'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion