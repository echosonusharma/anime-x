import useStore from '../../store/store';
import Link from 'next/link';

const SearchInput = () => {
    const input = useStore((state) => state.setInput)


    return (
        <div className="py-5 flex w-full">
            <input
                type="text"
                placeholder="Search Anime"
                onInput={(e) => input(e.target.value.trim().replace(/\s+/g, '&'))}
                className="p-2 pl-5 w-2/4 border-indigo-500 border-2 rounded-full focus:outline-none" />
            <button className="btn-next-prev ml-5 p-1"><Link href="/search"> Search</Link></button>
        </div>
    )
};

export default SearchInput;