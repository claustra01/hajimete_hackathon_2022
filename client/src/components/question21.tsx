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
                <img src="/21.png" width="60%" style={{left:"20%"}}  alt="aaaa" />
              </div>
            
               <div className = "scorebox"></div>
              </div>
              <div className = "displaybox">
                
                {/* ans=21 */}
               <img src="/16.png" className = "cardbox1"/>
               <img src="/2.png" className = "cardbox2"/>
               <img src="/21.png" className = "cardbox3"/>
               <img src="/12.png" className = "cardbox4"/>
               <img src="/9.png" className = "cardbox5"/>
              </div>
           </ul>
          </div>


         

      </div>
        
        
       

    )


}


