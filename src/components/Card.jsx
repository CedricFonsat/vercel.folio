import React from 'react'

const Card = ({article}) => {
  return (
    <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] cursor-pointer bg-gray-200 bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined m-2">
    <div class="h-full w-full">
        <div class="relative w-full">
            <img src={article.foreground} class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
            <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                </div>
            </button>
        </div>
        <div class="mb-3 flex items-center justify-between px-1 md:items-start">
            <div class="mb-2">
                <p class="text-lg font-bold text-navy-700"> {article.title} </p>
                <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">By {article.author}</p>
            </div>
        </div>
        <div class="flex items-center justify-between md:items-center lg:justify-between ">
            <button href="" class="linear rounded-[20px] bg-purple-900 px-4 py-1 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">{article.category}</button>
        </div>
    </div>
</div>
  )
}

export default Card