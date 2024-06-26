export const Preview = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src="/load-35_128.gif"
        alt="Loading animation"
        className="w-200 h-200"
      />
      <h1 className="text-50 font-bold text-white text-center">
        Installing dependencies...
      </h1>
      <h1 className="text-25 font-bold text-white text-center">
        The dependency logs are showing up in the debugging tool
      </h1>
    </div>
  )
}
