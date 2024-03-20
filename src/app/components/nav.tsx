import Image from 'next/image'
import Logo from '../../../public/watches.webp'
import Menu from '../../../public/menu.webp'
export default function NavBar() {
    return (
        <div className="mt-0 mx-auto bg-black z-10">
            <ol className="flex justify-between items-center mt-0 mx-2 p-2 text-white text-center">
                <li className='mx-2 p-2'> <Image src={Logo}width={50} height={100} alt="logo"/>  </li>
                <li className="mx-2 p-2"> <a href = ''> Watches </a></li>
                <li className="mx-2 p-2"> <a href = ''> Metal Watches </a></li>
                <li className="mx-2 p-2"> <a href = ''> Bracelets </a></li>
                <li className='mx-2 p-2'> <button><Image src={Menu} width={25} height={50} alt='menu Logo'/></button></li>

            </ol>

        </div>

    );
}