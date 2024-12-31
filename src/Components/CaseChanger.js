import React, { useState } from 'react'


export default function CaseChanger(props) {
    const [text,setText] = useState("")

        const [copied,setCopied] = useState(false)

        const convertupper = ()=>{
            let newtext = text.toUpperCase()
            setText(newtext)
            // document.title = "TextUtils - UpperCase"
            props.showAlert("success","Converted to UpperCase")
        }
        const convertlower = ()=>{
            let newtext = text.toLowerCase()
            setText(newtext)
            // document.title = "TextUtils - LowerCase"
            props.showAlert("success","Converted to LowerCase")
        }
        const textchange = (event)=>{
            setText(event.target.value)
        }

        const handleCopy = () => {
            navigator.clipboard.writeText(text)
              .then(() => {
                setCopied(true);
                props.showAlert("success","Text Copied Successfully")
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
              })
              .catch((err) => console.error('Failed to copy text: ', err));
          };
        const clearall=()=>{
            setText("")
            props.showAlert("success","Text Cleared")
        }
    
  return (
    <>
    {/* <div className='text-right pb-12' style={props.mode}>
        <button type='button' onClick={props.togglemode} style={props.mode}  className='mr-4 mt-4   border-2 rounded-xl p-2'>{props.modetext}</button>
    </div> */}
    
    <div className='flex flex-col  items-center h-2/3  w-screen' style={props.mode}>
    <h1 className="text-3xl my-4">Try TextUtils</h1>
        <div className='pb-4 text-center  w-2/3  flex justify-center items-end mb-4'>
        <textarea name="text-area" id="text-area"  className='border-2 border-gray-400 w-2/3 h-2/3 p-6 overflow-auto scrollbar-hide' style={props.mode} value={text} onChange={textchange}> </textarea>
        </div>
        <div className ="flex flex-wrap">

        <button className='border-2 m-2  border-gray-600 bg-green-300 mx-2 text-black p-2 rounded-xl ' disabled={text.length===0}  onClick={convertupper}>Convert to UpperCase</button>
        <button className='border-2 m-2  border-gray-600 bg-green-300 mx-2 text-black p-2 rounded-xl ' disabled={text.length===0} onClick={convertlower}>Convert to LowerCase</button>
        <button className='border-2 m-2  border-gray-600 bg-green-300 mx-2 text-black p-2 rounded-xl ' disabled={text.length===0}  onClick={handleCopy}><p>{copied ? 'Text copied!' : 'Copy Text'}</p></button>
        <button className='border-2 m-2  border-gray-600 bg-green-300 mx-2 text-black p-2 rounded-xl ' disabled={text.length===0}  onClick={clearall}>Clear all text</button>
        </div>
        <div className='pt-3'>
            <div style={props.mode}>
            <p>Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} , Characters {text.length} , WhiteSpaces {(text.match(/\s/g) || []).length}</p>
            </div>
        </div>
    </div>
        
        
    </>
  )
}
