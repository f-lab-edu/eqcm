import cn from 'classnames';

export const Icons = {
  MyPage: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <g id="vector">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9999 3.25V2.25H10.9999V3.25V8.25V9.25H12.9999V8.25V3.25Z"
            fill="black"
          ></path>
          <path
            d="M20.9999 21.75H2.99994V11.9992C2.99994 11.3045 3.56393 10.75 4.24994 10.75H19.7499C20.4403 10.75 20.9999 11.3096 20.9999 12V21.75Z"
            fill="black"
          ></path>
        </g>
      </g>
    </svg>
  ),
  MyLike: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 6.41677C11.1926 4.696 9.48906 3.5 7.5 3.5C4.72132 3.5 2.5 5.83496 2.5 8.672C2.5 9.79894 2.96136 10.8146 3.39443 11.5251C3.61364 11.8847 3.83255 12.1775 3.99731 12.3812C4.07986 12.4832 4.14931 12.5635 4.19906 12.6193C4.22395 12.6472 4.24396 12.669 4.25826 12.6844L4.27534 12.7025L4.2805 12.708L4.28219 12.7097L12 20.7207L19.7169 12.7106L19.7178 12.7097L19.7195 12.708L19.7246 12.7026L19.7417 12.6844C19.756 12.669 19.776 12.6472 19.8009 12.6193C19.8507 12.5635 19.9201 12.4832 20.0027 12.3812C20.1674 12.1775 20.3864 11.8847 20.6056 11.5251C21.0386 10.8146 21.5 9.79895 21.5 8.672C21.5 5.83395 19.2786 3.5 16.5 3.5C14.5111 3.5 12.8077 4.69631 12.0001 6.41677Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  ShoppingBag: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.76608 3.16285 7.29564 4.04656 7.101 5H4.202C3.5272 5 3 5.54425 3 6.2V20.8121L3.00029 20.8243C3.00786 21.1357 3.13575 21.4321 3.35713 21.6513C3.5785 21.8705 3.87616 21.9954 4.18766 21.9999L4.19483 22H19.798C20.4728 22 21 21.4557 21 20.8V14.5H12V12.5H21V6.2C21 5.55334 20.4709 5 19.798 5H16.899C16.7044 4.04656 16.2339 3.16285 15.5355 2.46447C14.5979 1.52678 13.3261 1 12 1ZM14.1213 3.87868C14.4407 4.19808 14.6807 4.5821 14.8284 5H9.17157C9.31933 4.5821 9.55927 4.19808 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  Login: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C8.68629 2 6 4.68629 6 8V10H4.75C4.33579 10 4 10.3358 4 10.75V21.25C4 21.6642 4.33579 22 4.75 22H19.25C19.6642 22 20 21.6642 20 21.25V10.75C20 10.3358 19.6642 10 19.25 10H18V8C18 4.68629 15.3137 2 12 2ZM16 10V8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V10H16ZM13 13.5C13 12.9477 12.5523 12.5 12 12.5C11.4477 12.5 11 12.9477 11 13.5V15.5C11 16.0523 11.4477 16.5 12 16.5C12.5523 16.5 13 16.0523 13 15.5V13.5Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  Logout: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10H19.25C19.6642 10 20 10.3358 20 10.75V21.25C20 21.6642 19.6642 22 19.25 22H4.75C4.33579 22 4 21.6642 4 21.25V10.75C4 10.3358 4.33579 10 4.75 10H6V8C6 4.68629 8.68629 2 12 2C13.9985 2 15.7688 2.97712 16.8593 4.47969L15.307 5.749C14.5869 4.69318 13.3744 4 12 4C9.79086 4 8 5.79086 8 8V10ZM12 12.5C12.5523 12.5 13 12.9477 13 13.5V15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5V13.5C11 12.9477 11.4477 12.5 12 12.5Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  Search: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9 4.5C7.36538 4.5 4.5 7.36538 4.5 10.9C4.5 14.4346 7.36538 17.3 10.9 17.3C12.6636 17.3 14.2589 16.588 15.4175 15.4334C16.5815 14.2735 17.3 12.6716 17.3 10.9C17.3 7.36538 14.4346 4.5 10.9 4.5ZM2.5 10.9C2.5 6.26081 6.26081 2.5 10.9 2.5C15.5392 2.5 19.3 6.26081 19.3 10.9C19.3 12.8628 18.6258 14.6695 17.4979 16.0993L21.2056 19.7914L19.7944 21.2086L16.0818 17.5116C14.6548 18.6313 12.8548 19.3 10.9 19.3C6.26081 19.3 2.5 15.5392 2.5 10.9Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  SearchMobile: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9 4.5C7.36538 4.5 4.5 7.36538 4.5 10.9C4.5 14.4346 7.36538 17.3 10.9 17.3C12.6636 17.3 14.2589 16.588 15.4175 15.4334C16.5815 14.2735 17.3 12.6716 17.3 10.9C17.3 7.36538 14.4346 4.5 10.9 4.5ZM2.5 10.9C2.5 6.26081 6.26081 2.5 10.9 2.5C15.5392 2.5 19.3 6.26081 19.3 10.9C19.3 12.8628 18.6258 14.6695 17.4979 16.0993L21.2056 19.7914L19.7944 21.2086L16.0818 17.5116C14.6548 18.6313 12.8548 19.3 10.9 19.3C6.26081 19.3 2.5 15.5392 2.5 10.9Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  FooterArrow: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 80"
      width="100%"
      height="100%"
    >
      <path
        d="M1 0l40 40.083L1.166 80"
        fill="none"
        fillRule="evenodd"
        stroke="rgb(160, 160, 160)"
        strokeWidth="5"
      ></path>
    </svg>
  ),
  HomeOff: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#818181"
      strokeWidth="1.5"
    >
      <g>
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 4.75C3.5 4.05964 4.05964 3.5 4.75 3.5H11.5V11.5H3.5V4.75ZM12.5 3.5H19.25C19.9404 3.5 20.5 4.05964 20.5 4.75V11.5H12.5V3.5ZM3.5 12.5H11.5V20.5H4.75C4.05964 20.5 3.5 19.9404 3.5 19.25V12.5ZM12.5 12.5H20.5V19.25C20.5 19.9404 19.9404 20.5 19.25 20.5H12.5V12.5Z"
          stroke="#818181"
          fill="none"
        />
      </g>
    </svg>
  ),
  HomeOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 4.75C3.5 4.05964 4.05964 3.5 4.75 3.5H11.5V11.5H3.5V4.75ZM12.5 3.5H19.25C19.9404 3.5 20.5 4.05964 20.5 4.75V11.5H12.5V3.5ZM3.5 12.5H11.5V20.5H4.75C4.05964 20.5 3.5 19.9404 3.5 19.25V12.5ZM12.5 12.5H20.5V19.25C20.5 19.9404 19.9404 20.5 19.25 20.5H12.5V12.5Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  ShopOff: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
    >
      <g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 .5H.5V3h1V1.5h15V3h1V.5H1zm0 4H.5v13h17v-13H1zm.5 12v-11h15v11h-7v-6h-1v6h-7z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  ShopOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      stroke="#000"
    >
      <g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 .5H.5V3h1V1.5h15V3h1V.5H1zm0 4H.5v13h17v-13H1zm.5 12v-11h15v11h-7v-6h-1v6h-7z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  ),
  SearchOff: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9 4C7.08924 4 4 7.08924 4 10.9C4 14.7108 7.08924 17.8 10.9 17.8C12.8012 17.8 14.5219 17.0318 15.7705 15.7876C17.0247 14.5377 17.8 12.8099 17.8 10.9C17.8 7.08924 14.7108 4 10.9 4ZM3 10.9C3 6.53695 6.53695 3 10.9 3C15.2631 3 18.8 6.53695 18.8 10.9C18.8 12.9057 18.052 14.7375 16.8206 16.1305L20.8528 20.1457L20.1472 20.8543L16.1124 16.8365C14.7218 18.0584 12.8971 18.8 10.9 18.8C6.53695 18.8 3 15.2631 3 10.9Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  SearchOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
      stroke="#000"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9 4C7.08924 4 4 7.08924 4 10.9C4 14.7108 7.08924 17.8 10.9 17.8C12.8012 17.8 14.5219 17.0318 15.7705 15.7876C17.0247 14.5377 17.8 12.8099 17.8 10.9C17.8 7.08924 14.7108 4 10.9 4ZM3 10.9C3 6.53695 6.53695 3 10.9 3C15.2631 3 18.8 6.53695 18.8 10.9C18.8 12.9057 18.052 14.7375 16.8206 16.1305L20.8528 20.1457L20.1472 20.8543L16.1124 16.8365C14.7218 18.0584 12.8971 18.8 10.9 18.8C6.53695 18.8 3 15.2631 3 10.9Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  MagazineOff: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 4.5V19.5H19.5V4.5H15V12H14V4.5H10V12H9V4.5H4.5ZM3.5 4.25C3.5 3.83579 3.83579 3.5 4.25 3.5H19.75C20.1642 3.5 20.5 3.83579 20.5 4.25V19.75C20.5 20.1642 20.1642 20.5 19.75 20.5H4.25C3.83579 20.5 3.5 20.1642 3.5 19.75V4.25Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  MagazineOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
      stroke="#000"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 4.5V19.5H19.5V4.5H15V12H14V4.5H10V12H9V4.5H4.5ZM3.5 4.25C3.5 3.83579 3.83579 3.5 4.25 3.5H19.75C20.1642 3.5 20.5 3.83579 20.5 4.25V19.75C20.5 20.1642 20.1642 20.5 19.75 20.5H4.25C3.83579 20.5 3.5 20.1642 3.5 19.75V4.25Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  MyOff: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 3V2.5H11.5V3V8V8.5H12.5V8V3ZM4.5 17.1225V12H19.5V20.5V21H20.5V20.5V11.75C20.5 11.3358 20.1642 11 19.75 11H4.25C3.83796 11 3.5 11.3328 3.5 11.7492V20.5V21H4.5V20.5V17.1225Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  MyOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
      stroke="#000"
    >
      <g id="weight=light, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 3V2.5H11.5V3V8V8.5H12.5V8V3ZM4.5 17.1225V12H19.5V20.5V21H20.5V20.5V11.75C20.5 11.3358 20.1642 11 19.75 11H4.25C3.83796 11 3.5 11.3328 3.5 11.7492V20.5V21H4.5V20.5V17.1225Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  Naver: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clip-path="url(#clip0_13943_649)">
        <path
          d="M9.24387 7.44339L4.57223 0.700293H0.700195V13.3003H4.75652V6.55614L9.42816 13.3003H13.3002V0.700293H9.24387V7.44339Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_13943_649">
          <rect
            width="13"
            height="13"
            fill="black"
            transform="translate(0.700195 0.700195)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  Email: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.51846 12.4203C6.88799 12.4203 5.67147 11.1511 5.66303 8.99176C5.67147 6.82418 6.93023 5.57967 8.51846 5.57967C9.68429 5.57967 10.1996 6.28846 10.4108 6.70055H10.4953V5.71154H11.9653V10.3269C11.9906 10.9286 12.2356 11.2253 12.7425 11.217C13.6971 11.2253 14.3223 10.1456 14.3307 8.5467C14.3476 5.56319 12.1596 3.60165 9.00845 3.60165C5.75595 3.60989 3.67774 5.98352 3.66929 8.99176C3.66929 12.2637 5.48562 14.4231 8.94086 14.3984C10.132 14.3901 10.9768 14.2995 11.9653 14.0357V15.3544C11.0782 15.6016 10.056 15.75 8.94086 15.75C4.75909 15.75 2.25002 13.1456 2.25002 8.99176C2.24157 5.09341 5.04632 2.25 9.00845 2.25C13.0128 2.25 15.7584 4.92033 15.75 8.49725C15.75 11.0275 14.4236 12.4945 12.6242 12.4863C11.526 12.4863 10.7065 11.9423 10.5798 11.1841H10.4953C10.2841 11.6044 9.74343 12.4203 8.51846 12.4203ZM7.25126 8.97528C7.24281 10.1703 7.83417 11.0604 8.89018 11.0687C9.96308 11.0604 10.5206 10.2363 10.5291 8.97528C10.5206 7.74725 9.97152 6.93956 8.89018 6.93132C7.82572 6.93956 7.24281 7.81319 7.25126 8.97528Z"
        fill="black"
      ></path>
    </svg>
  ),
  ViewMoreArrow: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      color="primary"
    >
      <g id="weight=bold, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 17.4142L20.7071 8.70711L19.2929 7.2929L12 14.5858L4.70712 7.2929L3.29291 8.70711L12 17.4142Z"
          fill="black"
        ></path>
      </g>
    </svg>
  ),
  LikeOff: ({ fillWhite = false }: { fillWhite?: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="tertiary"
    >
      <g id="weight=regular, fill=false">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 4.80001C5.48502 4.80001 3.8 6.50634 3.8 8.67201C3.8 9.45911 4.1296 10.2334 4.50447 10.8485C4.68761 11.1489 4.87124 11.3945 5.00805 11.5636C5.07617 11.6478 5.13189 11.7121 5.16908 11.7538C5.18765 11.7746 5.20152 11.7897 5.20992 11.7987L5.2183 11.8077C5.21815 11.8075 5.21853 11.8079 5.2183 11.8077C5.21837 11.8078 5.219 11.8084 5.21905 11.8085C5.21904 11.8085 5.21915 11.8086 5.21905 11.8085L12 18.847L18.7808 11.8086L18.7816 11.8078L18.7901 11.7987C18.7985 11.7897 18.8123 11.7746 18.8309 11.7538C18.8681 11.7121 18.9238 11.6478 18.9919 11.5636C19.1287 11.3945 19.3124 11.1489 19.4955 10.8485C19.8704 10.2334 20.2 9.45911 20.2 8.67201C20.2 6.50551 18.5151 4.80001 16.5 4.80001C14.485 4.80001 12.8 6.50634 12.8 8.67201H11.2C11.2 6.50551 9.51508 4.80001 7.5 4.80001ZM12.0001 5.78179C11.0689 4.23809 9.41209 3.20001 7.5 3.20001C4.54508 3.20001 2.2 5.68004 2.2 8.67201C2.2 9.87738 2.69176 10.9487 3.13826 11.6812C3.3658 12.0545 3.59285 12.3582 3.76406 12.5698C3.84994 12.676 3.92255 12.76 3.97521 12.819C4.00156 12.8486 4.02297 12.8719 4.03864 12.8887L4.05773 12.9091L4.06387 12.9155L4.06605 12.9178L12 21.1531L19.9327 12.9191L19.9339 12.9178L19.9361 12.9155L19.9422 12.9091L19.9613 12.8887C19.977 12.8719 19.9984 12.8486 20.0248 12.819C20.0774 12.76 20.15 12.676 20.2359 12.5698C20.4071 12.3582 20.6342 12.0545 20.8617 11.6812C21.3082 10.9487 21.8 9.87738 21.8 8.67201C21.8 5.67899 19.4548 3.20001 16.5 3.20001C14.588 3.20001 12.9314 4.23832 12.0001 5.78179Z"
          fill={fillWhite ? '#fff' : '#a0a0a0'}
        />
      </g>
    </svg>
  ),
  LikeOn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="tertiary"
    >
      <g id="weight=bold, fill=true">
        <path
          id="vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 6.41677C11.1926 4.696 9.48906 3.5 7.5 3.5C4.72132 3.5 2.5 5.83496 2.5 8.672C2.5 9.79894 2.96136 10.8146 3.39443 11.5251C3.61364 11.8847 3.83255 12.1775 3.99731 12.3812C4.07986 12.4832 4.14931 12.5635 4.19906 12.6193C4.22395 12.6472 4.24396 12.669 4.25826 12.6844L4.27534 12.7025L4.2805 12.708L4.28219 12.7097L12 20.7207L19.7169 12.7106L19.7178 12.7097L19.7195 12.708L19.7246 12.7026L19.7417 12.6844C19.756 12.669 19.776 12.6472 19.8009 12.6193C19.8507 12.5635 19.9201 12.4832 20.0027 12.3812C20.1674 12.1775 20.3864 11.8847 20.6056 11.5251C21.0386 10.8146 21.5 9.79895 21.5 8.672C21.5 5.83395 19.2786 3.5 16.5 3.5C14.5111 3.5 12.8077 4.69631 12.0001 6.41677Z"
          fill="#ff4800"
        ></path>
      </g>
    </svg>
  ),
  SlideLeftArrow: ({ fillWhite = false }: { fillWhite?: boolean }) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
        fill={fillWhite ? '#fff' : '#0F0F0F'}
      />
    </svg>
  ),
  SlideRightArrow: ({ fillWhite = false }: { fillWhite?: boolean }) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z"
        fill={fillWhite ? '#fff' : '#0F0F0F'}
      />
    </svg>
  ),
  Check: ({ style, color }: { style: string; color?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        `text-[${color ? color : '#dcdfe6'}] peer-checked:text-white`,
        style,
      )}
    >
      <path
        d="M20.6303 6.49266L10.6975 19.2009L3.43756 12.0235L4.56245 10.8856L10.5439 16.7991L19.3697 5.50735L20.6303 6.49266Z"
        fill={color ? color : '#dcdfe6'}
      ></path>
    </svg>
  ),
  CategoryDropdown: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
    >
      <g transform="matrix(1 0 0 -1 0 24)" fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="#000000"
          strokeWidth="2"
          d="m16.545 13.727-4.554-4.545-4.536 4.526"
        />
        <circle stroke="#000000" strokeWidth="2" cx="12" cy="12" r="10" />
      </g>
    </svg>
  ),
  DetailLikeOff: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path
        d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"
        fill="#ffffff"
        fillRule="evenodd"
        stroke="#5d5d5d"
        strokeWidth="0.7"
      />
    </svg>
  ),
  DetailLikeOn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
      <path
        d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"
        fill="#ff4800"
        fillRule="evenodd"
        stroke="#ff4800"
        strokeWidth="0.7"
      />
    </svg>
  ),
  CouponDownload: () => (
    <svg viewBox="0 0 9 9" width={12} height={12}>
      <g fill="#ffffff" fillRule="evenodd">
        <path fill="none" d="M0 0h9v9H0z" />
        <path d="M7.284 4.243 4.625 6.695l-.292.275-.003-.003v.001l-.673-.626.002-.002-2.23-2.083.733-.582 1.665 1.607L3.828 0h.937v5.339l1.856-1.678.663.582zm.31 3.505v.943h-6.54v-.943h6.54z" />
      </g>
    </svg>
  ),
  Tooltip: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="#a0a0a0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3332 9.99999C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 9.99999C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 9.99999ZM9.99984 17.5C14.142 17.5 17.4998 14.1421 17.4998 9.99999C17.4998 5.85785 14.142 2.49999 9.99984 2.49999C5.8577 2.49999 2.49984 5.85785 2.49984 9.99999C2.49984 14.1421 5.8577 17.5 9.99984 17.5Z"
        fill="var(--ruler-scale-color-gray-400)"
      />
      <path
        d="M8.98441 12.2742C9.00601 10.6746 9.76938 10.3477 10.7704 9.7287C11.4978 9.27663 11.9227 8.7411 11.9227 7.97606C11.9227 6.94674 11.0873 6.2582 10.0358 6.26515C9.05642 6.2582 8.17782 6.88414 8.12021 8.07343H7.08317C7.13358 6.44598 8.40827 5.41666 10.0358 5.41666C11.7498 5.41666 12.9165 6.51553 12.9165 8.01779C12.9165 9.03321 12.4268 9.74261 11.4762 10.3407C10.5544 10.911 9.99984 11.1753 9.97823 12.2742V12.5107H8.98441V12.2742ZM8.68914 13.846C8.68914 13.4357 9.04202 13.1018 9.46692 13.0949C9.88461 13.1018 10.2303 13.4357 10.2303 13.846C10.2303 14.2494 9.88461 14.5902 9.46692 14.5832C9.04202 14.5902 8.68914 14.2494 8.68914 13.846Z"
        fill="var(--ruler-scale-color-gray-400)"
      />
    </svg>
  ),
  Dropdown: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
      width={12}
      height={6}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="rgb(212, 212, 212)"
        strokeWidth="3"
      >
        <path d="M28 1L13.97 15 0 1.058"></path>
      </g>
    </svg>
  ),
  FullStar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 13 12"
    >
      <path
        fill="#000000"
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="0.7"
        d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
      ></path>
    </svg>
  ),
  HalfStar: () => (
    <i className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 13 12"
      >
        <path
          fill="#d4d4d4"
          fillRule="evenodd"
          stroke="#d4d4d4"
          strokeWidth="0.7"
          d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
        />
      </svg>
      <svg
        className="absolute top-0"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 13 12"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      >
        <path
          fill="#000000"
          fillRule="evenodd"
          stroke="#000000"
          strokeWidth="0.7"
          d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
        />
      </svg>
    </i>
  ),
  EmptyStar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 13 12"
    >
      <path
        fill="#d4d4d4"
        fillRule="evenodd"
        stroke="#d4d4d4"
        strokeWidth="0.7"
        d="M4.146 3.95L0 4.583l3 3.075L2.292 12 6 9.95 9.708 12 9 7.658l3-3.075-4.146-.633L6 0z"
      />
    </svg>
  ),
  DeleteOption: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 82"
      width={6}
      height={6}
      fill="#a0a0a0"
    >
      <g
        fill="#a0a0a0"
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="square"
      >
        <path d="M82.655.345L1.156 81.844M82.655 81.655L1.156.156" />
      </g>
    </svg>
  ),
};
