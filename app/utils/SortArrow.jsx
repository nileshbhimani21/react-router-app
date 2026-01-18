import { ChevronDownIcon, ChevronUpIcon } from "../components/Icons"

export default function SortArrow(filter, orderby) {
    if (orderby === filter?.orderby && filter?.order === "desc") {
        return <ChevronUpIcon className='h-5' />
    }
    if (orderby === filter?.orderby && filter?.order === "asc") {
        return <ChevronDownIcon className='h-5' />
    }
    return <ChevronUpIcon className='h-5 opacity-30' />

}
