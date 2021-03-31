import Link from 'next/link';
import SearchInput from "./anime-list/search-input"

const Navbar = () => {


    return (
        <div className="mx-48 flex items-center justify-between gap-10 pt-6">
            <div className="flex gap-12 w-full">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-indigo-500 text-5xl font-black"><Link href='/'>Anime</Link></h1>
                <ul className="flex gap-6 items-center text-lg">
                    <li>Plan To Watch</li>
                    <li>Watched</li>
                </ul>
            </div>
            <SearchInput />
            <div className=" ml-10 w-24 h-10 rounded-full bg-gray-800" />
        </div>
    )
};

export default Navbar;