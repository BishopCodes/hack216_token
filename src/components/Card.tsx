export default function Card({student}: {student: {[key: string]: string}}) {
  return (
    <div className="grid grid-cols-2 gap-2 border shadow-md dark:border-gray-700 dark:bg-gray-800 rounded-lg h-100">
      <div className="p-8">
      <img className="object-cover rounded-full h-40 md:h-auto w-40" src="/birb.png" alt="" />
      </div>
      <div className="grid grid-rows-2 justify-items-end p-6">
        <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
        UOPX
          <img className="inline-flex h-10 md:h-auto w-10 pl-2" src="/logo.png" alt="" /> 
          </h5>
          <div className="flex flex-col leading-normal">
           <p className="font-normal text-gray-700 dark:text-white">Student Name: {student?.name} </p>
           <p className="font-normal text-gray-700 dark:text-white">IRN: {student?.id} </p>
          </div>
      </div>
    </div>

  )
}