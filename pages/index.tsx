export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 justify-center">
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
        <div className="mt-5 bg-blue-500 text-white p-2 text-center rounded-xl w-1/2 mx-auto">
          Checkout
        </div>
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

          <div className="relative mt-5 flex flex-col items-center -top-16">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-3xl shadow-xl w-96"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96"></div>
    </div>
  );
}
