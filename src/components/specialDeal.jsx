const SpecialDeal = () => (
  <div className="bg-[#ef4444] text-white rounded-2xl p-4 max-w-sm shadow-md relative">
    <button className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors">
      ✕
    </button>

    <div className="flex items-center gap-2 mb-3">
      <div className="bg-white text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full">
        Special Deal!
      </div>
    </div>

    <h3 className="text-lg font-semibold mb-1">
      Register now to unlock
    </h3>
    <p className="text-white/90 text-[15px] leading-snug mb-4">
      exclusive offers and discounts
    </p>

    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
      <div className="text-center">
        <div className="text-2xl font-bold">06</div>
        <div className="text-xs text-white/70 -mt-1">hours</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">53</div>
        <div className="text-xs text-white/70 -mt-1">minutes</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">08</div>
        <div className="text-xs text-white/70 -mt-1">seconds</div>
      </div>
    </div>

    <p className="text-center text-xs text-white/75 mt-3">
      Offer expires in: <span className="font-medium">6:53:08</span>
    </p>
  </div>
)

export default SpecialDeal