
import Home from '../Home/page';
import About from '../About/page';
import Contact from '../Contact/page'




const Navbar=()=>{
    return(<div>
        <div className="place-items-center"><a className=' text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 text-3xl '  href="#H" target='blank'>Home</a><a className='text-3xl text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 ' href="#A" target='blank'>About</a><a className='text-3xl text-center text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 '  href="#C" target='blank'>Contact</a></div><br/>
<div className="place-items-center" ><h1 className="flex" id="H"><Home/></h1><h1 className="flex" id="A"><About/></h1><br/><br/><h1 className="flex" id="C"><Contact/></h1></div>
</div>
    )
}
export default Navbar;