'use client'

export default function NFTShowcase() {
  return (
    <div className="relative w-full h-full flex justify-evenly p-0 bg-gradient-to-br from-[#b100ff] via-[#00ff8b] to-[#b100ff] overflow-hidden">
      {[false, true, false].map((isReverse, idx) => (
        <div key={idx} className="w-[28%] h-full overflow-hidden relative">
          <div className={`absolute top-0 left-0 w-full h-[200%] flex flex-col`}>
            <div className={`flex flex-col gap-10 w-full animate-${isReverse ? 'scrollUp' : 'scrollDown'}`}>
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-full aspect-[1.5/2] bg-[#040310] rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(177,0,255,0.1)] to-[rgba(0,255,139,0.1)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 