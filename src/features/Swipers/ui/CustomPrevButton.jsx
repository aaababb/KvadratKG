const CustomPrevButton = ({ onClick }) => (
    <button onClick={onClick} className="swiper-button-prev-custom">
     <svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="28" cy="27.5" r="27" stroke="white"/>
<path d="M25.2662 20.6714L18.4375 27.5001L25.2662 34.3289" stroke="#DFDFEC" stroke-width="1.6875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.5627 27.5H18.6289" stroke="#DFDFEC" stroke-width="1.6875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
  );
  
  export default CustomPrevButton;