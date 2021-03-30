import useStore from '../../store/store';
import Link from 'next/link';

const SearchInput = () => {
    const input = useStore((state) => state.setInput)


    return (
        <div className="flex justify-end w-full">
            <div className="flex gap-5 " >
                <input
                    type="text"
                    placeholder="Search Anime"
                    onInput={(e) => input(e.target.value.trim().replace(/\s+/g, '&'))}
                    className="p-2 pl-5 border-gray-900 border-2 rounded-full focus:outline-none focus:border-gray-600" />
                <button className="btn-next-prev"><Link href="/search"> Search</Link></button>
            </div>
        </div>
    )
};

export default SearchInput;