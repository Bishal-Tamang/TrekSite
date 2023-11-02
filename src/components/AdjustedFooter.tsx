import Organization from './Organization'
import Logo from '../assets/Picture/Navbar/Logo.png'

import mountain from '../assets/Picture/Footer/footer-background.png'
const AdjustedFooter = () => {

const styles = {
  backgroundImage: `url(${mountain})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundOrigin: 'border',
  backgroundPosition: 'center'

}

  return (
    <div className=''  style={styles}>

      {/* Organization content */}
      <Organization />

      {/* Footer Content */}
<div className='footer-container mx-[9.37rem] flex justify-between'>

<div className='footer-left'>
    <img src={Logo} alt="" className='text-[54px] mb-6'/>
    <p className='w-[60%]'>
      Spell travels is established in 1998 by an Act of Parliament in the form of partnership between the Government of Nepal and private sector tourism industry to develop and market Nepal as an attractive tourist destination. 
    </p>
    <p>&copy; Spell travels. All Rights Reserved.</p>
</div>


</div>
    </div>
  )
}

export default AdjustedFooter