
import PokemonCard from "@/components/PokemonCard";
import SearchForm from "@/components/SearchForm";
import { usePokemonListStore } from '@/store/pokemonList'

const HomePage = () => {

    const { pokemon } = usePokemonListStore()
    console.log(usePokemonListStore());



    return (
        <div className=' w-[90%] m-[auto] max-w-[1100px]'>
            <div className='flex justify-center'>
                <img src="/images/logo.png" className='max-h-[120px] mt-[20px]' alt="" />
            </div>
            <SearchForm />

            <div className="grid grid-cols-4 gap-[20px] mt-[40px]">

                {pokemon.data?.map((item) => {
                    return <PokemonCard data={item} />
                })}
            </div>
        </div>
    )
}

export default HomePage