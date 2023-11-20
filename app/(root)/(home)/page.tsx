import SearchForm from '@/components/SearchForm'
import React from 'react'

const Page = () => {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
    <section className="nav-padding w-full">
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center '>
            <h1 className="text-4xl font-bold text-white leading-tight tracking-tight">Javascript Mastery Resources</h1>
        </div>
        <SearchForm/>
    </section>
    Filters
    </main>
  )
}

export default Page