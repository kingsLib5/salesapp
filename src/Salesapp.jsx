import React, { useRef, useState } from 'react'

function Salesapp() {

    let [pr,setpr] = useState("")
    let [cost,setcost] = useState("")
    let qtyval = useRef()

    function you() {
        if (pr== "") {
            setpr(3000)
        } else {
            setpr("")
        }
    }

    function cal() {
        setcost(pr*qtyval.current.value)
    }

    let [pr1,setpr1] = useState("")
    let [cost1,setcost1] = useState("")
    let qtyval1 = useRef()

    function on() {
        if (pr1== "") {
            setpr1(3000)
        } else {
            setpr1("")
        }
    }

    function cal2() {
        setcost1(pr1*qtyval1.current.value)
    }

    let [pr2,setpr2] = useState("")
    let [cost2,setcost2] = useState("")
    let qtyval2 = useRef()

    function to() {
        if (pr2== "") {
            setpr2(3000)
        } else {
            setpr2("")
        }
    }

    function cal3() {
        setcost2(pr2*qtyval2.current.value)
    }
    
    let [st,setst] = useState("")

    function cc() {
        setst(cost + cost1 + cost2)
    }

  return (
    <>
    
                <div className=' flex flex-col bg-gray-500 h-[60vh] justify-center items-center gap-[20px]'>
                    <div className='bg-slate-400 flex flex-row h-[70px] w-[60%] rounded-lg justify-center items-center gap-[20px]'>

                            <input type="checkbox" onClick={you} />Football
                            <input type="number" placeholder='price' value={pr} disabled />
                            <input type="number" placeholder='Qty' ref={qtyval} onInput={cal} />
                            <input type="number" placeholder='Cost' value={cost} />

                    </div>
                    <div className='bg-slate-400 flex flex-row h-[70px] w-[60%] rounded-lg justify-center items-center gap-[20px]'>

                            <input type="checkbox" onClick={on}/>Baseball
                            <input type="number" placeholder='price' value={pr1} disabled />
                            <input type="number" placeholder='Qty' ref={qtyval1} onInput={cal2}  />
                            <input type="number" placeholder='Cost' value={cost1} />

                    </div>
                     <div className='bg-slate-400 flex flex-row h-[70px] w-[60%] rounded-lg justify-center items-center gap-[20px]'>

                            <input type="checkbox" onClick={to} />Basketball
                            <input type="number" placeholder='price' value={pr2} disabled />
                            <input type="number" placeholder='Qty' ref={qtyval2} onInput={cal3}/>
                            <input type="number" placeholder='Cost' value={cost2}/>

                    </div>
                    <div className='flex justify-center items-center gap-[10px]'>

                        <h1 className='text-[30px] text-white '>Total:{st}</h1>
                    </div>
                </div>
    
    
    </>
  )
}

export default Salesapp