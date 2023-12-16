export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 justify-center min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between mb-2">
          <span className="text-gray-500 my-2">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span>Black Table</span>
          <span className="font-semibold">$21</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$40</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-2 text-center rounded-xl w-1/2 mx-auto
         hover:bg-teal-500 active:bg-yellow-500 focus:text-red-500"
        >
          Checkout
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl w-96">
        <div className="bg-blue-500 p-6 pb-14 ">
          <span className="text-white text-2xl">Profile</span>
        </div>

        <div className="rounded-xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 font-bold">Orders</span>
              <span className="font-bold">340</span>
            </div>

            <div className="h-24 w-24 bg-red-400 rounded-full" />

            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 font-bold">Spent</span>
              <span className="font-bold">$2,310</span>
            </div>
          </div>

          <div className="relative mt-5 -mb-20 flex flex-col items-center -top-16">
            <span className="text-lg font-semibold">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl w-96">
        <div className="flex justify-between items-center mb-6">
          <span>⬅</span>

          <div className="space-x-3">
            <span>⭐4.9</span>
            <span className="shadow-xl p-2 rounded-md ">🧡</span>
          </div>
        </div>

        <div className="bg-zinc-400 h-72 mb-5" />
        {/* 의자사진 */}

        <div className="flex flex-col ">
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>

          <div className="mt-3 mb-5 flex justify-between items-center">
            <div>
              <button className="w-5 h-5 rounded-full bg-yellow-500" />
              <button className="w-5 h-5 rounded-full bg-indigo-500" />
              <button className="w-5 h-5 rounded-full bg-teal-500" />
            </div>

            <div className="space-x-5">
              <button className="p-1.5 rounded-lg bg-blue-200 justify-center items-center aspect-square w-10  text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-blue-200 justify-center items-center aspect-square w-10  text-xl text-gray-500">
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">$450</span>
            <button className="bg-blue-500 p-2 py-2 px-8 text-xs text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
