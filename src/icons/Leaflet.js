import React from "react";

const Leaflet = ({ light }) => {
  return (
    <svg
      width="16"
      height="26"
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3817 9.5997C0.062418 11.5695 -0.387782 14.0632 0.362551 16.4864C1.61919 20.5393 5.65011 21.8605 7.40523 22.2509C5.87064 16.7534 2.56657 14.6388 2.56657 14.6388C6.85586 16.8718 8.23647 22.3995 8.23647 22.3995C10.113 14.8944 2.5209 13.2798 1.38039 9.5997H1.3817Z"
        fill={light ? "white" : "url(#paint0_radial_199_99)"}
      />
      <path
        d="M15.0814 8.53323C15.9348 9.98519 16.2445 11.8355 15.794 13.6475C15.0407 16.6785 12.5061 17.7056 11.4013 18.014C12.3164 13.9056 14.3829 12.2961 14.3829 12.2961C11.6947 14.0049 10.8774 18.1331 10.8774 18.1331C9.61766 12.5675 14.398 11.2836 15.0814 8.53323Z"
        fill={light ? "white" : "url(#paint1_radial_199_99)"}
      />
      <path
        d="M4.83916 5.83261C9.17156 8.78024 10.1001 15.1863 10.1001 15.1863C12.8164 6.85034 4.92242 4.28451 4.06957 -0.00012207C2.47993 2.10701 1.76081 4.89437 2.32223 7.7156C2.84832 10.3596 4.38119 12.1149 5.94686 13.2551C7.81532 14.6156 9.04666 16.7357 9.22455 19.0892C9.52986 23.1275 7.14287 25.5995 7.14287 25.5995C12.3559 21.7462 9.23212 14.9374 9.23212 14.9374C8.13703 8.5509 4.83789 5.83261 4.83789 5.83261H4.83916Z"
        fill={light ? "white" : "url(#paint2_radial_199_99)"}
      />
      {!light && (
        <defs>
          <radialGradient
            id="paint0_radial_199_99"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.1112 2.81503) scale(25.3038 24.422)"
          >
            <stop stopColor="#29AB03" />
            <stop offset="1" stopColor="#52853F" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_199_99"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.4476 2.26612) scale(22.5746 25.664)"
          >
            <stop stopColor="#29AB03" />
            <stop offset="1" stopColor="#52853F" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_199_99"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.26193 2.85109) scale(24.4628 25.2673)"
          >
            <stop stopColor="#29AB03" />
            <stop offset="1" stopColor="#52853F" />
          </radialGradient>
        </defs>
      )}
    </svg>
  );
};

export default Leaflet;
