import useStore from '../../store/store';
import Link from 'next/link';

const SearchInput = () => {
    const input = useStore((state) => state.setInput)


    return (
        <div className="py-5">
            <input
                type="text"
                placeholder="Search Anime"
                onInput={(e) => input(e.target.value.trim().replace(/\s+/g, '&'))}
                className="p-2 pl-5 w-156 border-indigo-500 border-2 rounded-2xl focus:outline-none" />
            <button className="btn-next-prev ml-5 p-1"><Link href="/search"> Search</Link></button>
        </div>
    )
};

export default SearchInput;