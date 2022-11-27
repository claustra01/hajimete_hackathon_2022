import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CustomHead from '../components/customhead'


export default function Gamepage() {
    return (
      <div className='{styles.container}'>
         <CustomHead/>

          <div className = "boxborder">
           <ul>
              <div>
              <div className="questionbox" >
                <img src="/15.png" width="60%" style={{left:"20%"}}  alt="aaaa" />
              </div>
            
               <div className = "scorebox"></div>
              </div>
              <div className = "displaybox">
                
                {/* ans=15 */}
               <img src="/24.png" className = "cardbox1"/>
               <img src="/8.png" className = "cardbox2"/>
               <img src="/15.png" className = "cardbox3"/>
               <img src="/1.png" className = "cardbox4"/>
               <img src="/17.png" className = "cardbox5"/>
              </div>
           </ul>
          </div>


         

      </div>
        
        
       

    )


}


