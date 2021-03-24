import useStore from '../../store/store';
import Link from 'next/link';

const SearchInput = () => {
    const input = useStore((state) => state.setInput)


    return (
        <div className="flex justify-center py-4" >
            <div>
                <input
                    type="text"
                    placeholder="Search Anime"
                    onInput={(e) => input(e.target.value.trim().replace(/\s+/g, '&'))}
                    className="p-2 pl-5 w-132 border-indigo-700 border-2 rounded-full focus:outline-none" />
                <button className="btn-next-prev ml-5"><Link href="/search"> Search</Link></button>
            </div>
        </div>
    )
};

export default SearchInput;