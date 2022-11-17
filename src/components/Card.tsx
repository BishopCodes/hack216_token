export default function Card({student}: {student: {[key: string]: string}}) {
  return (
    <div className="grid grid-cols-2 border shadow-md border-gray-700 bg-gray-800 rounded-lg">
      <div className="p-5">
        <img className="object-cover rounded-full h-40 md:h-auto w-40 border-2" src="/birb.png" alt="" />
      </div>
      <div className="grid grid-rows-2 justify-items-end pt-6 pr-6">
        <h5 className="text-2xl font-bold text-gray-900 text-white">
          UOPX
          <img className="inline-flex h-10 md:h-auto w-10 pl-2" src="/logo.png" alt="" /> 
        </h5>
        <div className="grid-cols-1 flex-col leading-normal">
          <div className="font-bold text-gray-900 text-white">Name: 
          <p className="inline font-normal text-gray-900 text-white pl-1">{student?.name} </p>
          </div>
           <div className="font-bold text-gray-900 text-white">IRN:
            <p className="inline font-normal text-gray-900 text-white pl-1">{student?.irn} </p>
           </div>
           <div className="font-bold text-gray-900 text-white">ID:
            <p className="inline font-normal text-gray-900 text-white pl-1">{student?.id} </p>
           </div>
        </div>
      </div>
    </div>

  )
}