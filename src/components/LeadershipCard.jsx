import { useState } from 'react'
import { CornerFlourish } from './Ornament.jsx'

export default function LeadershipCard({ member }) {
  const [imgError, setImgError] = useState(false)
  return (
    <article className="relative card-ornate p-8 text-center">
      <CornerFlourish />
      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="w-28 h-28 overflow-hidden border border-brass-500/40 bg-coal-900/80 shadow-brass">
            {!imgError ? (
              <img src={member.photo} alt={member.placeholder} onError={() => setImgError(true)} className="w-full h-full object-cover grayscale-[30%] contrast-110" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-coal-800">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-brass-500/40" fill="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4z" />
                </svg>
              </div>
            )}
          </div>
          <span className="absolute -bottom-2 -right-2 w-10 h-10 flex items-center justify-center border border-brass-500/60 bg-coal-800 font-display text-base text-brass-300 font-bold">{member.rank}</span>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.35em] text-brass-500 uppercase mb-1">Rank {member.rank}</p>
      <h3 className="font-display text-xl text-parchment-100 tracking-wide">{member.placeholder}</h3>
    </article>
  )
}
