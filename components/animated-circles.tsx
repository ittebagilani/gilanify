"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedCircles() {
  const containerRef = useRef(null)
  const leftCircleRef = useRef(null)
  const rightCircleRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const leftCircle = leftCircleRef.current
    const rightCircle = rightCircleRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    // Set initial positions
    gsap.set(leftCircle, { x: -50 })
    gsap.set(rightCircle, { x: 50 })

    // Animation to bring circles closer
    tl.to([leftCircle, rightCircle], {
      x: 0,
      ease: "power2.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-60 h-60">
      <div
        ref={leftCircleRef}
        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={rightCircleRef}
        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  )
}

