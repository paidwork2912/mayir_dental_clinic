import { useEffect, useRef } from "react";
import { reviews } from "../data/siteData";

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <p className="quote">“{review[2]}”</p>
      <div className="reviewer">
        <div className="avatar">{review[3]}</div>
        <div><strong>{review[0]}</strong><span>{review[1]}</span></div>
        <div className="stars-sm">★★★★★</div>
      </div>
    </article>
  );
}

function Reviews() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let frame;
    let offset = 0;
    const move = () => {
      if (pausedRef.current) {
        frame = requestAnimationFrame(move);
        return;
      }
      offset -= 0.35;
      const resetPoint = track.scrollWidth / 2;
      if (Math.abs(offset) >= resetPoint) offset = 0;
      track.style.transform = `translateX(${offset}px)`;
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <div>
            <span className="section-tag">— REAL STORIES</span>
            <h2>Loved by patients across the city.</h2>
          </div>
          <div className="google-rating-box"><span className="score">4.9</span><div><div className="stars">★★★★★</div><p>238+ verified reviews</p></div></div>
        </div>
      </div>
      <div className="reviews-marquee" aria-label="Patient reviews">
        <div
          className="reviews-track"
          ref={trackRef}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onFocus={() => { pausedRef.current = true; }}
          onBlur={() => { pausedRef.current = false; }}
        >
          {[...reviews, ...reviews].map((review, index) => <ReviewCard key={`${review[0]}-${index}`} review={review} />)}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
