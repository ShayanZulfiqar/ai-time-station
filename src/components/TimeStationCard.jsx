import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TimeStationCard = ({ title, description, content, cardStyle }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // GSAP hover animation
    const onHover = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
        boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
      });
    };

    const onHoverOut = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      });
    };

    // Adding hover event listeners
    card.addEventListener('mouseenter', onHover);
    card.addEventListener('mouseleave', onHoverOut);

    // Cleanup event listeners on component unmount
    return () => {
      card.removeEventListener('mouseenter', onHover);
      card.removeEventListener('mouseleave', onHoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white shadow-lg my-10 rounded-lg p-6 max-w-2xl mx-auto transform transition-transform ${cardStyle}`}
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-gray-700 space-y-4">{content}</div>
    </div>
  );
};

export default TimeStationCard;
